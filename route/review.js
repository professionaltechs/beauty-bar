const express = require('express')
const auth = require("../functions/authentication");
const reviewController = require("../controller/review")

const router = express.Router();


router.post("/create", auth,reviewController.create);
router.post("/get", auth,reviewController.get);
router.post("/getAll", auth, reviewController.getAll);
router.post("/update", auth, reviewController.update);
router.post("/delete", auth, reviewController.delete);

module.exports = router;