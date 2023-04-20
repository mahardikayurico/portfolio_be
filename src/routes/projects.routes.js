const express = require("express");
const router = express();
const verifyToken = require("../helper/verifyToken");
//import controller=
const projectsController = require("../controller/projects.controller");
const formUpload = require("../helper/upload");

router.get("/:userId", projectsController.getByUserId);

module.exports = router;
