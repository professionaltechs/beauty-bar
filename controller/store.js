const Store = require("../model/store");

exports.storeSignUp = async (req, res) => {
  const body = req.body;
  Store.findOne({ email: body.email }).then((found) => {
    if (found) {
      return res.json({
        status: "success",
        message: "user exists with this email",
      });
    }
    bcrypt
      .hash(body.password, 12)
      .then((hashedPw) => {
        const newUser = new Store(req.body);
        newUser.password = hashedPw;
        newUser
          .save()
          .then((result) => {
            res.json({
              status: "success",
              message: "admin created successfully",
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({ status: "failed", message: error });
          });
      })
      .catch((error) => {
        console.log(error);
        res.json({ status: "failed", message: error });
      });
  });
};

exports.storeSignIn = async (req, res) => {
  console.log(req.body);
  let foundUser;
  Store.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.json({
        status: "failed",
        message: "the user has not been found with this email",
      });
    } else {
      foundUser = user;
      bcrypt.compare(req.body.password, user.password).then((response) => {
        console.log(response);
        const token = jwt.sign(
          {
            email: foundUser.email,
            id: foundUser._id,
            isStore: 1,
            role: foundUser.role
          },
          "BeautyBar",
          { expiresIn: "365d" }
        );
        const { password, ...responseUser } = foundUser._doc;
        res.json({
          status: "success",
          message: "the user has been loggedIn",
          Data: responseUser,
          token: token,
        });
      });
    }
  });
};

exports.createStore = async (req, res) => {
  try {
    const store = await new Store(req.body);

    store.save().then((response) => {
      res.json({
        id: response._id,
        message: "store created succesfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
};

exports.getStoreById = async (req, res) => {
  const store = await Store.findOne({
    _id: req.body.id,
    isDeleted: { $ne: 1 },
  });

  res.json({
    store,
  });
};

exports.getAllStores = async (req, res) => {
  const store = await Store.find({ isDeleted: { $ne: 1 } });

  res.json({
    message: store,
  });
};

exports.updateStoreById = async (req, res) => {
  try {
    const store = await Store.findOne({ _id: req.body.id });

    store.title = req.body.title || store.title;
    store.image = req.body.image || store.image;

    store.save().then((response) => {
      res.json({
        store,
        message: "updated succesfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
};

exports.deleteStoreById = async (req, res) => {
  try {
    const store = await Store.findOne({ _id: req.body.id });

    store.isDeleted = 1;
    store.save().then((response) => {
      console.log(response);
      res.json({
        message: "deleted succesfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error,
    });
  }
};
