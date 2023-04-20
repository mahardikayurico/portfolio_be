const express = require("express");
const router = express();
const verifyToken = require("../helper/verifyToken");
//import controller=
const educationController = require("../controller/education.controller");
const formUpload = require("../helper/upload");

router.get("/:id", educationController.getDetail);
router.patch("/:id", educationController.update);
router.delete("/:id", educationController.remove);

module.exports = router;
