const db = require("../helper/connection");
const { v4: uuidv4 } = require("uuid");
const projectsModel = {
  getByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * from projects WHERE id_user='${userId}'`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            return resolve(result.rows);
          }
        }
      );
    });
  },
};

module.exports = projectsModel;
