const db = require("../helper/connection");
const { v4: uuidv4 } = require("uuid");
const userModel = {
  get: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM resume WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          return resolve(result.rows);
        }
      });
    });
  },

  update: ({
    id,
    fullname,
    email,
    phone,
    password,
    jobType,
    address,
    image,
    instagram,
    github,
    gitlab,
    bio,
  }) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users_worker WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          db.query(
            `UPDATE users_worker SET name='${
              fullname || result.rows[0].fullname
            }', email ='${email || result.rows[0].email}', phone ='${
              phone || result.rows[0].phone
            }', password ='${
              password || result.rows[0].password
            }', job_type ='${jobType || result.rows[0].jobType}', address ='${
              address || result.rows[0].address
            }',  image ='${image || result.rows[0].image}', instagram ='${
              instagram || result.rows[0].instagram
            }', github ='${github || result.rows[0].github}', gitlab ='${
              gitlab || result.rows[0].gitlab
            }', bio ='${bio || result.rows[0].bio}' WHERE id='${id}'`,
            (err, result) => {
              if (err) {
                return reject(err.message);
              } else {
                return resolve({
                  id,
                  fullname,
                  email,
                  phone,
                  password,
                  jobType,
                  address,
                  image,
                  instagram,
                  github,
                  gitlab,
                  bio,
                });
              }
            }
          );
        }
      });
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE from users_worker WHERE id='${id}'`, (err, result) => {
        if (err) {
          return reject(err.message);
        } else {
          return resolve("success delete");
        }
      });
    });
  },
};

module.exports = userModel;
