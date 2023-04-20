const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { JWT_PRIVATE_KEY } = process.env;
const Pagination = {
  page: (page, limit) => {
    let result = (page - 1) * limit + 1;
    return result ? result : 0;
  },
};

const userController = {
  get: (req, res) => {
    return userModel
      .get(req.params.id)
      .then((result) => {
        return res.status(200).send({ message: "success", data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
  update: (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      //store hash in your password DB
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        const request = {
          ...req.body,
          id: req.params.id,
          image: req.file.filename,
          password: hash,
        };
        return userModel
          .update(request)
          .then((result) => {
            if (typeof result.oldImages != "undefined") {
              for (let index = 0; index < result.oldImages.length; index++) {
                unlink(
                  `src/public/uploads/images/${result.oldImages[index].filename}`
                );
              }
            }
            return res.status(201).send({ message: "success", data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
};

module.exports = userController;
