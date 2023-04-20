const db = require("../helper/connection");
const { v4: uuidv4 } = require("uuid");
const experienceModel = {
  getByUserId: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM experience WHERE id_user='${userId}'`,
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
  update: ({ id, company, role, start, end, desc }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM workexperience WHERE id='${id}' `,
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            db.query(
              `UPDATE workexperience SET experience_company='${
                company || result.rows[0].company
              }', experience_role ='${
                role || result.rows[0].role
              }', experience_start ='${
                start || result.rows[0].start
              }', experience_end ='${
                end || result.rows[0].end
              }', experience_description ='${
                desc || result.rows[0].desc
              }' WHERE id='${id}'`,
              (err, result) => {
                if (err) {
                  return reject(err.message);
                } else {
                  return resolve({
                    id,
                    company,
                    role,
                    start,
                    end,
                    desc,
                  });
                }
              }
            );
          }
        }
      );
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE from workexperience WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          return resolve("success delete");
        }
      });
    });
  },
};

module.exports = experienceModel;
