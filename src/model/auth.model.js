const db = require("../helper/connection");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const authModel = {
  loginWorker: ({ email, password }) => {
    // console.log(username, password);
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users_worker WHERE email=$1`,
        [email],
        (err, result) => {
          //username = unique||email = unique
          if (err) return reject(err.message);
          if (result.rows.length == 0) return reject("email/password salah."); //ketika username salah
          bcrypt.compare(
            password,
            result.rows[0].password,
            (err, hashingResult) => {
              if (err) return reject(err.message); //kesalahan hashing(bycript)
              if (!hashingResult) return reject("email/password salah."); //ketika password salah
              return resolve(result.rows[0]);
            }
          );
        }
      );
    });
  },
  loginCompany: ({ email, password }) => {
    // console.log(username, password);
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users_company WHERE email=$1`,
        [email],
        (err, result) => {
          //username = unique||email = unique
          if (err) return reject(err.message);
          if (result.rows.length == 0) return reject("email/password salah."); //ketika username salah
          bcrypt.compare(
            password,
            result.rows[0].password,
            (err, hashingResult) => {
              if (err) return reject(err.message); //kesalahan hashing(bycript)
              if (!hashingResult) return reject("email/password salah."); //ketika password salah
              return resolve(result.rows[0]);
            }
          );
        }
      );
    });
  },
  registerWorker: ({ fullname, email, phone, password }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users_worker (id, name, email, phone, password) VALUES ('${uuidv4()}','${fullname}','${email}','${phone}','${password}') RETURNING id`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          }
          return resolve({
            fullname,
            email,
            phone,
            password,
          });
        }
      );
    });
  },
  registerCompany: ({
    fullname,
    email,
    companyName,
    companySector,
    phone,
    password,
  }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users_company (id, name, email, company_name, company_sector, phone, password) VALUES ('${uuidv4()}','${fullname}','${email}','${companyName}','${companySector}','${phone}','${password}') RETURNING id`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          }
          return resolve({
            fullname,
            email,
            companyName,
            companySector,
            phone,
            password,
          });
        }
      );
    });
  },
};
module.exports = authModel;
