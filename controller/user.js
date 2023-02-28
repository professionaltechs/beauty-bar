const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/user");
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MEcpGLCNC3Hn0osJ7je3vOMv6f9KK8zB4GOeZ1v5FSptPQZMGfbyjvB4rc350FKbfOO7ek5LECz75dMNaz8RNvU00VRccAgDr');
const paypal = require("paypal-rest-sdk");
const product = require("../model/product");
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "", // ARFpVeDTsGuRYRzndTcPgCQnFbq9TZn2oov0M3riZAGbefxnmvAdgWQz2MUKvlVchBdS5IKMPRO31zJN
  client_secret:
    "", // EKYoVUC-kfNxo_LB7Ur-LDsmVMhF2JVe29Xs2r7l2IIQFnp248QHC66uFdqGKc0WAk6rF5J6vObBv0Oj
});

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
        foundUser = found;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            id: foundUser._id,
            firebase_uid: foundUser.firebase_uid,
            isAdmin: 0,
          },
          "BeautyBar",
          { expiresIn: "365d" }
        );
        const { ...responseUser } = foundUser._doc;
        return res.json({
          status: "success",
          message: "the user has been loggedIn",
          Data: responseUser,
          token: token,
        });
      } else {
        const newUser = new User(req.body);
        newUser
          .save()
          .then((result) => {
            const token = jwt.sign(
              {
                phone: result.phone,
                id: result._id,
                firebase_uid: result.firebase_uid,
                isAdmin: 0,
              },
              "BeautyBar",
              { expiresIn: "365d" }
            );
            res.json({
              status: "success",
              message: "user created successfully and has been loggedIn",
              Data: result,
              token: token,
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({ status: "failed", message: error });
          });
      }
    });
  } else if (type == "1") {
    User.findOne({ google_uid: body.google_uid }).then((found) => {
      if (found) {
        foundUser = found;
        const token = jwt.sign(
          {
            google_uid: foundUser.google_uid,
            phone: foundUser.phone,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
          { expiresIn: "365d" }
        );
        const { ...responseUser } = foundUser._doc;
        return res.json({
          status: "success",
          message: "the user has been loggedIn",
          Data: responseUser,
          token: token,
        });
      } else {
        const newUser = new User(req.body);
        newUser
          .save()
          .then((result) => {
            const token = jwt.sign(
              {
                phone: result.phone,
                id: result._id,
                google_uid: result.google_uid,
                isAdmin: 0,
              },
              "BeautyBar",
              { expiresIn: "365d" }
            );
            res.json({
              status: "success",
              message: "user created successfully and has been loggedIn",
              Data: result,
              token: token,
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({ status: "failed", message: error });
          });
      }
    });
  } else if (type == "2") {
    User.findOne({ facebook_uid: body.facebook_uid }).then((found) => {
      if (found) {
        foundUser = found;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            facebook_uid: foundUser.facebook_uid,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
          { expiresIn: "365d" }
        );
        const { ...responseUser } = foundUser._doc;
        return res.json({
          status: "success",
          message: "the user has been loggedIn",
          Data: responseUser,
          token: token,
        });
      } else {
        const newUser = new User(req.body);
        newUser
          .save()
          .then((result) => {
            const token = jwt.sign(
              {
                phone: result.phone,
                id: result._id,
                facebook_uid: result.facebook_uid,
                isAdmin: 0,
              },
              "BeautyBar",
              { expiresIn: "365d" }
            );
            res.json({
              status: "success",
              message: "user created successfully and has been loggedIn",
              Data: result,
              token: token,
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({ status: "failed", message: error });
          });
      }
    });
  } else if (type == "3") {
    User.findOne({ kakao_uid: body.kakao_uid }).then((found) => {
      if (found) {
        foundUser = found;
        const token = jwt.sign(
          {
            phone: foundUser.phone,
            kakao_uid: foundUser.kakao_uid,
            id: foundUser._id,
            isAdmin: 0,
          },
          "BeautyBar",
          { expiresIn: "365d" }
        );
        const { ...responseUser } = foundUser._doc;
        return res.json({
          status: "success",
          message: "the user has been loggedIn",
          Data: responseUser,
          token: token,
        });
      } else {
        const newUser = new User(req.body);
        newUser
          .save()
          .then((result) => {
            const token = jwt.sign(
              {
                phone: result.phone,
                id: result._id,
                kakao_uid: result.kakao_uid,
                isAdmin: 0,
              },
              "BeautyBar",
              { expiresIn: "365d" }
            );
            res.json({
              status: "success",
              message: "user created successfully and has been loggedIn",
              Data: result,
              token: token,
            });
          })
          .catch((error) => {
            console.log(error);
            res.json({ status: "failed", message: error });
          });
      }
    });
  } else {
    res.json({ status: "failed", message: "Kindly select a valid login mode" });
  }
};

// exports.signIn = async (req, res) => {
//   let foundUser;
//   let type = req.body.loginMode;
//   if (type === "0") {
//     User.findOne(
//       { firebase_uid: req.body.firebase_uid, phone: req.body.phone },
//       { __v: 0, createdAt: 0, updatedAt: 0 }
//     ).then((user) => {
//       if (!user) {
//         res.json({
//           status: "failed",
//           message: "the user has not been found with this phone",
//         });
//       } else {
//         foundUser = user;
//         const token = jwt.sign(
//           {
//             phone: foundUser.phone,
//             id: foundUser._id,
//             isAdmin: 0,
//           },
//           "BeautyBar",
//           { expiresIn: "365d" }
//         );
//         const { ...responseUser } = foundUser._doc;
//         res.json({
//           status: "success",
//           message: "the user has been loggedIn",
//           Data: responseUser,
//           token: token,
//         });
//       }
//     });
//   }
//   else if(type == "1") {
//     User.findOne(
//       { google_uid: req.body.google_uid },
//       { __v: 0, createdAt: 0, updatedAt: 0 }
//     ).then((user) => {
//       if (!user) {
//         res.json({
//           status: "failed",
//           message: "the user has not been found with this account",
//         });
//       } else {
//         foundUser = user;
//         const token = jwt.sign(
//           {
//             phone: foundUser.phone,
//             id: foundUser._id,
//             isAdmin: 0,
//           },
//           "BeautyBar",
//           { expiresIn: "365d" }
//         );
//         const { ...responseUser } = foundUser._doc;
//         res.json({
//           status: "success",
//           message: "the user has been loggedIn",
//           Data: responseUser,
//           token: token,
//         });
//       }
//     });
//   }
//   else if(type == "2") {
//     User.findOne(
//       { facebook_uid: req.body.facebook_uid },
//       { __v: 0, createdAt: 0, updatedAt: 0 }
//     ).then((user) => {
//       if (!user) {
//         res.json({
//           status: "failed",
//           message: "the user has not been found with this account",
//         });
//       } else {
//         foundUser = user;
//         const token = jwt.sign(
//           {
//             phone: foundUser.phone,
//             id: foundUser._id,
//             isAdmin: 0,
//           },
//           "BeautyBar",
//           { expiresIn: "365d" }
//         );
//         const { ...responseUser } = foundUser._doc;
//         res.json({
//           status: "success",
//           message: "the user has been loggedIn",
//           Data: responseUser,
//           token: token,
//         });
//       }
//     });
//   }
//   else if (type == "3") {
//     User.findOne(
//       { kakao_uid: req.body.kakao_uid },
//       { __v: 0, createdAt: 0, updatedAt: 0 }
//     ).then((user) => {
//       if (!user) {
//         res.json({
//           status: "failed",
//           message: "the user has not been found with this account",
//         });
//       } else {
//         foundUser = user;
//         const token = jwt.sign(
//           {
//             phone: foundUser.phone,
//             id: foundUser._id,
//             isAdmin: 0,
//           },
//           "BeautyBar",
//           { expiresIn: "365d" }
//         );
//         const { ...responseUser } = foundUser._doc;
//         res.json({
//           status: "success",
//           message: "the user has been loggedIn",
//           Data: responseUser,
//           token: token,
//         });
//       }
//     });
//   } else {
//     res.json({
//       status: "failed",
//       message: "Please select a valid login mode",
//     });
//   }
// };

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

// req.body.prodcuts = [
//   {
//     id: "",
//     quantity: 1
//   },
//   {
//     id: "",
//     quantity: 2
//   }
// ]
exports.stripe = async (req, res) => {
    const productIds = []
    for (let i = 0; i < req.body.products.length; i++) {
      productIds.push(req.body.products[i].id);
    }
    
    const products = await product.find({_id: { $in: productIds}}, {price: 1, title: 1, images: 1, description: 1});

    const lineItemsArray = [];
    for (let i = 0; i < req.body.products.length; i++) {
      lineItemsArray.push({
        price_data: {
          currency: "usd",
          product_data: {
            images: [products[i].images[0]],
            name: products[i].title, // membership.description
          },
          unit_amount: products[i].price * 100, // parseInt(membership.price) * 100
        },
        quantity: req.body.products[i].quantity,
      })
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [...lineItemsArray],
      // custom_text: {
      //   shipping_address: {
      //     message: 'Please note that we can\'t guarantee 2-day delivery for PO boxes at this time.',
      //   },
      //   submit: {message: 'We\'ll email you instructions on how to get started.'},
      // },
      mode: 'payment',
      success_url: `http://localhost:5000/api/user/afterpurchase/${req.body.id}/${req.user.email}`,
      cancel_url: `http://localhost:5000/canceled?canceled=true`,
    });
  
    res.json({url: session.url})
  };

exports.paypal = async (req, res) => {
  req.body.products = [
        {
            "id": "63f7e2eb3aac20755b033fb7",
            "quantity": 1
        },
        {
            "id": "63f7e3b53aac20755b033fb9",
            "quantity": 4
        },
                {
            "id": "63f7e3c73aac20755b033fbb",
            "quantity": 3
        }
    ]
  const productIds = []
  for (let i = 0; i < req.body.products.length; i++) {
    productIds.push(req.body.products[i].id);
  }
  
  const products = await product.find({_id: { $in: productIds}}, {price: 1, title: 1, images: 1, description: 1});
  let totalPrice = 0
  const productsList = []
  for (let i = 0; i < req.body.products.length; i++) {
    totalPrice += products[i].price * req.body.products[i].quantity
    productsList.push({
      name: products[i].title,
      sku: "item",
      price: products[i].price,
      currency: "USD",
      quantity: req.body.products[i].quantity,
    })
  }
  // const obj = {
  //   name: "this is name", // membership.description
  //   sku: "item",
  //   price: 50, // parseInt(membership.price)
  //   currency: "USD",
  //   quantity: 1,
  // };
  console.log(totalPrice)
  var create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: `http://localhost:5000/api/user/success?total=${
        totalPrice + 10
      }&useremail=${
        req.params.useremail
      }&membershipId=${
        req.params.membershipId
      }`,
      cancel_url: "https://favelapicks.com/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [...productsList],
        },
        amount: {
          currency: "USD",
          total: totalPrice + 10,
          details: {
            subtotal: totalPrice,
            tax: 10,
            shipping: 0,
          },
        },
        description: "This is the payment description.",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      // console.log("Create Payment Response");
      console.log(payment);
      res.redirect(payment.links[1].href);
    }
  });
};

exports.successPaypal = (req, res) => {
  const PayerID = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const userEmail = req.query.useremail;
  const membershipId = req.query.membershipId;
  const execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: req.query.total,
        },
      },
    ],
  };
  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log("herreeeeeee")
        res.redirect(`http://localhost:5000/api/user/afterpurchase/${membershipId}/${userEmail}`)
      }
    }
  );
};

exports.afterpurchase = async (req, res) => {
  console.log(req.params.email);
  console.log(req.params.id);
  res.json({
    success: "success"
  })
}