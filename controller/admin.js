const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../model/admin");
const User = require("../model/user");

exports.createAdmin = async (req, res) => {
  const body = req.body;
  Admin.findOne({ phone: body.email }).then((found) => {
    if (found) {
      return res.json({
        status: "success",
        message: "user exists with this email",
      });
    }
    bcrypt
      .hash(body.password, 12)
      .then((hashedPw) => {
        const newUser = new Admin(req.body);
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

exports.signIn = async (req, res) => {
  console.log(req.body);
  let foundUser;
  Admin.findOne({ phone: req.body.email }).then((user) => {
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
            isAdmin: 1,
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

exports.testAdmin = async (req, res) => {
//   if (req.user.isAdmin != 1) {
//     res.json({
//         error: "Admin Acces Denied",
//         message: "this Api is only accessible by admin"
//     });
//   }
  if (req.user.isAdmin == 1) {
    res.json({ admin: "yes" });
  } else {
    res.json({ admin: "no" });
  }
};

exports.getUserList = async (req, res) => {
  try {
    const users = await User.find({isDeleted: {$ne: 1}});

    res.status(200).json({
      users
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message: error.message
    })
  }
}