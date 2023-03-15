const express = require("express");
const router = express();
const userRoute = require("./user.routes");
const authRoute = require("../routes/auth.routes");
const skillRoute = require("./skill.routes");
const portfolioRoute = require("./portfolio.routes");
const experienceRoute = require("./experience.routes");
const companyRoute = require("./company.routes");

router.get("/", (req, res) => {
  return res.send("backend for hireng me ");
});

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/skills", skillRoute);
router.use("/portfolio", portfolioRoute);
router.use("/experience", experienceRoute);

router.use("/company", companyRoute);

module.exports = router; //export, biar bisa diakses oleh file lain melalui require
