const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const multer = require("multer");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config()

const DB = process.env.DB;
const PORT = process.env.PORT;

// Routes
const bannerRoutes = require("./route/banner");
const brandRoutes = require("./route/brand");
const categoryRoutes = require("./route/category");
const subCategoryRoutes = require("./route/subCategory");
// const groupRoutes = require("./route/group");
// const popularProductRoutes = require("./route/popularProduct");
// const postRoutes = require("./route/post");
const productRoutes = require("./route/product");
const reviewRoutes = require("./route/review");
const shadesRoutes = require("./route/shades");
const skinConcernRoutes = require("./route/skinConcern");
const skinToneRoutes = require("./route/skinTone");
const skinTypeRoutes = require("./route/skinType");
const skinUnderToneRoutes = require("./route/skinUnderTone");
const userRoutes = require("./route/user");
// const adminRoutes = require("./route/admin");
const discountRoutes = require("./route/discount");
const roleRoutes = require("./route/role");
const permissionRoutes = require("./route/permission");
const storeRoutes = require("./route/store");
const uploadToS3Bucket = require("./route/uploadToS3Bucket");

var uploads = multer().any();

// Middleware
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(uploads);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
// app.use("/api/admin", adminRoutes);
app.use("/api/skinType", skinTypeRoutes);
app.use("/api/skinTone", skinToneRoutes);
app.use("/api/skinUnderTone", skinUnderToneRoutes);
app.use("/api/skinConcern", skinConcernRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/product", productRoutes);
// app.use("/api/post", postRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/subCategory", subCategoryRoutes);
// app.use("/api/group", groupRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/shades", shadesRoutes);
// app.use("/api/popularProduct", popularProductRoutes);
app.use("/api/discount", discountRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/permission", permissionRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/S3Bucket/", uploadToS3Bucket);

// swaggerOptionObject
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: "Beauty Bar",
      description: "API Documentation",
      contact: {
        name: "Developer",
        email: "example@gmail.com",
      },
      servers: ["http://localhost:5000"],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }          
      }
    }
  },
  apis: [
    "index.js", 
    "./route/user.js", 
    "./route/skinType.js", 
    "./route/skinTone.js", 
    "./route/skinUnderTone.js",
    "./route/skinConcern.js",
    "./route/banner.js",
    "./route/brand.js",
    "./route/category.js",
    "./route/subCategory.js",
    // "./route/group.js",
    // "./route/post.js",
    "./route/product.js",
    "./route/review.js",
    "./route/shades.js",
    "./route/discount.js",
    // "./route/admin.js",
    "./route/role.js",
    "./route/permission.js",
    "./route/uploadToS3Bucket.js",
    "./route/store.js",
    // "./route/popularProduct.js",
  ]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose
  .connect(DB).then(res => {
    console.log("DataBase Connected!")
  })
  .catch((err) => console.log(err));

app.listen(PORT || 5000, () => {
    console.log(`Server started on ${PORT || 5000}`)
})