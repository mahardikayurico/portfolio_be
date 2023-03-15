const express = require("express");
const router = express();
const verifyToken = require("../helper/verifyToken");
//import controller=
const portfolioController = require("../controller/portfolio.controller");
const formUpload = require("../helper/upload");

router.post("/:userId", formUpload.single("image"), portfolioController.add);
router.get("/:userId", portfolioController.getByUserId);
// router.patch(
//   "/:userId",
//   formUpload.single("image"),
//   portfolioController.update
// );
router.delete("/:id", portfolioController.remove);

module.exports = router;
