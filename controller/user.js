const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user");

// login mode -> 0 -> phone number login
// login mode -> 1 -> google login
// login mode -> 2 -> facebook login
// login mode -> 3 -> kakao login
exports.signUp = async (req, res) => {
  const body = req.body;
  let type = body.loginMode;

  if (type == "0") {
    User.findOne({ firebase_uid: body.firebase_uid }).then((found) => {
      if (found) {
        console.log(found);
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
    });
  }
  else if (type == "1") {
    User.findOne({ google_uid: body.google_uid }).then((found) => {
      if (found) {
        console.log(found);
        return res.json({
          status: "success",
          message: "user exists with this google account",
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
    });
  }
  else if (type == "2") {
    User.findOne({ facebook_uid: body.facebook_uid }).then((found) => {
      if (found) {
        console.log(found);
        return res.json({
          status: "success",
          message: "user exists with this account",
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
    });
  }
  else if (type == "3") {
    User.findOne({ kakao_uid: body.kakao_uid }).then((found) => {
      if (found) {
        console.log(found);
        return res.json({
          status: "success",
          message: "user exists with this account",
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
    });
  }
  else {
    res.json({ status: "failed", message: "Kindly select a valid login mode" });
  }
};

exports.signIn = async (req, res) => {
  let foundUser;
  let type = req.body.loginMode;
  if (type === "0") {
    User.findOne(
      { firebase_uid: req.body.firebase_uid, phone: req.body.phone },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    ).then((user) => {
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
            isAdmin: 0,
          },
          "BeautyBar",
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
  }
  else if(type == "1") {
    User.findOne(
      { google_uid: req.body.google_uid },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    ).then((user) => {
      if (!user) {
        res.json({
          status: "failed",
          message: "the user has not been found with this account",
        });
      } else {
        foundUser = user;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
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
  }
  else if(type == "2") {
    User.findOne(
      { facebook_uid: req.body.facebook_uid },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    ).then((user) => {
      if (!user) {
        res.json({
          status: "failed",
          message: "the user has not been found with this account",
        });
      } else {
        foundUser = user;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
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
  }
  else if (type == "3") {
    User.findOne(
      { kakao_uid: req.body.kakao_uid },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    ).then((user) => {
      if (!user) {
        res.json({
          status: "failed",
          message: "the user has not been found with this account",
        });
      } else {
        foundUser = user;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
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
  } else {
    res.json({
      status: "failed",
      message: "Please select a valid login mode",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await User.findOne(
      { _id: req.body.id },
      { __v: 0, createdAt: 0, updatedAt: 0 }
    );

    user.name = req.body.name || user.name;
    user.skinTypeId = req.body.skinTypeId || user.skinTypeId;
    user.skinToneId = req.body.skinToneId || user.skinToneId;
    user.skinUnderToneId = req.body.skinUnderToneId || user.skinUnderToneId;
    user.skinConcernIds = req.body.skinConcernIds || user.skinConcernIds;
    user.age = req.body.age || user.age;
    user.gender = req.body.gender || user.gender;
    // user.phone = req.body.phone || user.phone;
    user.profileImage = req.body.profileImage || user.profileImage;
    user.socialMedia = req.body.socialMedia || user.socialMedia;
    user.followers = req.body.followers || user.followers;
    user.posts = req.body.posts || user.posts;

    if (user.isProfileComplete != 1) {
      user.isProfileComplete = 1;
    }

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
