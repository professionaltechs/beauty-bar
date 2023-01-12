const express = require('express')
const auth = require("../functions/authentication");
const productController = require("../controller/product")

const router = express.Router();


router.post("/create", auth, productController.create);
router.post("/get", auth, productController.get);
router.post("/getAll", auth, productController.getAll);
router.post("/update", auth, productController.update);
router.post("/delete", auth, productController.delete);

module.exports = router;