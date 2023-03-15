const authModel = require("../model/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = process.env;

const authController = {
  loginWorker: (req, res) => {
    return authModel
      .loginWorker(req.body)
      .then((result) => {
        jwt.sign(
          { id: result.id, role: result.role },
          JWT_PRIVATE_KEY,
          (err, token) => {
            return res.status(200).send({
              message: "success",
              data: {
                token,
                user: result,
              },
            });
          }
        );
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
  loginCompany: (req, res) => {
    return authModel
      .loginCompany(req.body)
      .then((result) => {
        jwt.sign(
          { id: result.id, role: result.role },
          JWT_PRIVATE_KEY,
          (err, token) => {
            return res.status(200).send({
              message: "success",
              data: {
                token,
                user: result,
              },
            });
          }
        );
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
  registerWorker: (req, res) => {
    //PR: bikin validasi keseluruhan endpoint
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        const request = {
          fullname: req.body.fullname,
          email: req.body.email,
          phone: req.body.phone,
          password: hash,
        };
        return authModel
          .registerWorker(request)
          .then((result) => {
            return res.status(201).send({ message: "success", data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
  registerCompany: (req, res) => {
    //PR: bikin validasi keseluruhan endpoint
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        const request = {
          fullname: req.body.fullname,
          email: req.body.email,
          companyName: req.body.companyName,
          companySector: req.body.companySector,
          phone: req.body.phone,
          password: hash,
        };
        return authModel
          .registerCompany(request)
          .then((result) => {
            return res.status(201).send({ message: "success", data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
};

module.exports = authController;
