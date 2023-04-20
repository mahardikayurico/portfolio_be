const projectsModel = require("../model/projects.model");
const bcrypt = require("bcrypt");

const projectsController = {
  getByUserId: (req, res) => {
    // const id = req.params.id;
    return projectsModel
      .getByUserId(req.params.userId)
      .then((result) => {
        return res.status(200).send({ message: "success", data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },
};

module.exports = projectsController;
