const express = require("express");
const router = express();
// const verifyToken = require("../helper/verifyToken");
//import controller=
const skillController = require("../controller/skill.controller");
// const formUpload = require("../helper/upload");

router.post("/:userId", skillController.add);
router.get("/:userId", skillController.getByUserId);
router.delete("/:id", skillController.remove);

module.exports = router;
