const express = require("express");
const router = express();
const usersRoute = require("./users.routes");
const authRoute = require("../routes/auth.routes");
const skillRoute = require("./skill.routes");
const portfolioRoute = require("./portfolio.routes");
const experienceRoute = require("./experience.routes");
const educationRoute = require("./education.routes");

router.get("/", (req, res) => {
  return res.send("backend for hireng me ");
});

router.use("/users", usersRoute);
router.use("/skills", skillRoute);
// router.use("/portfolio", portfolioRoute);
router.use("/experience", experienceRoute);

router.use("/education", educationRoute);

module.exports = router; //export, biar bisa diakses oleh file lain melalui require
