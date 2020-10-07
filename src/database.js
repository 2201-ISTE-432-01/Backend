const { Pool}  = require('pg');

const pool = new Pool({
  connectionString: process.env.APP_POSTGRES_STRING,
});

exports.query = function (text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
