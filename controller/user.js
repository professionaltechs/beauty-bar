const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user");

exports.signUp = async (req, res) => {
  const body = req.body;
  User.findOne({ phone: body.phone }).then((found) => {
    if (found) {
      return res.json({
        status: "success",
        message: "user exists with this phone number",
      });
    }
    const newUser = new User(req.body);
    newUser
      .save()
      .then((result) => {
        res.json({
          status: "success",
          message: "user created successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        res.json({ status: "failed", message: error });
      });

    // const hashedPw = bcrypt
    //     .hash(body.password, 12)
    //     .then((hashedPw) => {
    //         const newUser = new User(req.body);
    //         newUser.password = hashedPw;
    //         newUser
    //             .save()
    //             .then((result) => {
    //                 res.json({
    //                     status: "success",
    //                     message: "user created successfully",
    //                 });
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 res.json({ status: "failed", message: error });
    //             });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.json({ status: "failed", message: error });
    //     });
  });
};

exports.signIn = async (req, res) => {
  console.log(req.body);
  let foundUser;
  User.findOne({ phone: req.body.phone }).then((user) => {
    if (!user) {
      res.json({
        status: "failed",
        message: "the user has not been found with this phone",
      });
    } else {
      foundUser = user;
      const token = jwt.sign(
        {
          phone: foundUser.phone,
          id: foundUser._id,
        },
        "test",
        { expiresIn: "365d" }
      );
      const { ...responseUser } = foundUser._doc;
      res.json({
        status: "success",
        message: "the user has been loggedIn",
        Data: responseUser,
        token: token,
      });
    }
  });
};

exports.update = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.id });

    user.userId = req.body.userId || user.userId;
    user.name = req.body.name || user.name;
    // user.email = req.body.email || user.email;
    // user.password = req.body.password || user.password;
    user.skinTypeId = req.body.skinTypeId || user.skinTypeId;
    user.skinToneId = req.body.skinToneId || user.skinToneId;
    user.skinUnderToneId = req.body.skinUnderToneId || user.skinUnderToneId;
    user.skinConcernId = req.body.skinConcernId || user.skinConcernId;
    user.age = req.body.age || user.age;
    user.gender = req.body.gender || user.gender;
    user.phone = req.body.phone || user.phone;
    user.profileImage = req.body.profileImage || user.profileImage;
    user.socialMedia = req.body.socialMedia || user.socialMedia;
    user.followers = req.body.followers || user.followers;
    user.posts = req.body.posts || user.posts;

    user.save().then((response) => {
      res.json({
        user: user,
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
