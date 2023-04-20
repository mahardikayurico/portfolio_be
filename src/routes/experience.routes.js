const express = require("express");
const router = express();
const verifyToken = require("../helper/verifyToken");
//import controller=
const experienceController = require("../controller/experience.controller");
const formUpload = require("../helper/upload");

router.get("/:userId", experienceController.getByUserId);
router.patch("/:id", experienceController.update);

module.exports = router;
