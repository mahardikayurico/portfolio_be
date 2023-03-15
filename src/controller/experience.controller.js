const experienceModel = require("../model/experience.model");
const bcrypt = require("bcrypt");

const experienceController = {
  add: (req, res) => {
    const request = {
      ...req.body,
      userId: req.params.userId,
    };
    return experienceModel
      .add(request)
      .then((result) => {
        return res.status(201).send({ message: "succes", data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
  getByUserId: (req, res) => {
    return experienceModel
      .getByUserId(req.params.userId)
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
        };
        return userModel
          .update(request)
          .then((result) => {
            return res.status(201).send({ message: "success", data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
  remove: (req, res) => {
    return experience
      .remove(req.params.id)
      .then((result) => {
        return res.status(200).send({ message: "success", data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
};

module.exports = experienceController;
