const express = require("express");
const router = express();
const verifyToken = require("../helper/verifyToken");
//import controller=
const userController = require("../controller/user.controller");
const formUpload = require("../helper/upload");

router.get("/:id", userController.get);
router.patch("/:id", userController.update);

module.exports = router;
