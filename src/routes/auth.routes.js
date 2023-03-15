const express = require("express");
const router = express();
const formUpload = require("../helper/upload");

//import controller=
const authController = require("../controller/auth.controller");

router.post("/loginWorker", authController.loginWorker);
router.post("/loginCompany", authController.loginCompany);
router.post("/registerworker", authController.registerWorker);
router.post("/registercompany", authController.registerCompany);
module.exports = router;
