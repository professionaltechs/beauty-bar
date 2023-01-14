const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user");

exports.signUp = async (req, res) => {
    const body = req.body;
    User.findOne({ email: body.email }).then((found) => {
        if (found) {
            return res.json({
                status: "success",
                message: "user exists with this email",
            });
        }

        const hashedPw = bcrypt
            .hash(body.password, 12)
            .then((hashedPw) => {
                const newUser = new User(req.body);
                newUser.password = hashedPw;
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
            })
            .catch((error) => {
                console.log(error);
                res.json({ status: "failed", message: error });
            });
    });
};

exports.signIn = async (req, res) => {
    console.log(req.body)
    let foundUser;
    User
        .findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res.json({
                    status: "failed",
                    message: "the user has not been found with this email/name",
                });
            }
            else {
                foundUser = user;
                bcrypt.compare(req.body.password, user.password)
                    .then(resss => {
                        if (resss) {
                            if (foundUser.isActive == 1) {
                                res.json({
                                    status: "failed",
                                    message: "the user acount is not active",
                                });
                            }
                            else if (foundUser.deleted == 1) {
                                res.json({
                                    status: "failed",
                                    message: "the user account is deleted",
                                });
                            }
                            else {
                                const token = jwt.sign(
                                    {
                                        email: foundUser.email,
                                        id: foundUser._id,
                                    },
                                    "test",
                                    { expiresIn: "365d" }
                                );
                                const { password, ...responseUser } = foundUser._doc;
                                res.json({
                                    status: "success",
                                    message: "the user has been loggedIn",
                                    Data: responseUser,
                                    token: token,
                                });
                            }
                        }
                        else {
                            res.json({
                                status: "failed",
                                message: "incorrect password",
                            });
                        }

                    })
            }

        })
};