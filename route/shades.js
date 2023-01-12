const express = require('express')
const auth = require("../functions/authentication");
const shadesController = require("../controller/shades")

const router = express.Router();


router.post("/create", auth,shadesController.create);
router.post("/get", auth,shadesController.get);
router.post("/getAll", auth, shadesController.getAll);
router.post("/update", auth, shadesController.update);
router.post("/delete", auth, shadesController.delete);

module.exports = router;