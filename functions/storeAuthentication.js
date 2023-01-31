const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearertoken = bearer[1];
    req.token = bearertoken;
    jwt.verify(req.token, "BeautyBar", async (err, Authdata) => {
      if (err) {
        return res.json({
          message: "TokenVefificationFailed",
          auth: "authFailed",
          statusCode: 403,
        });
      } else {
        req.user = {...Authdata};
        console.log(req.user)

        if(req.user.isStore != 1){
          return res.json({
              error: "Store access denied",
              message: "This API is store protected"
          })
        }

        next();
      }
    });
  } else {
    return res.json({
      message: "noTokenFound",
      auth: "authFailed",
      statusCode: 403,
    });
  }
};