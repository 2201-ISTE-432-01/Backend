const { Pool}  = require('pg');

DATABASE_URL = 'postgres://admin:letmein@localhost:5433/spotify';

const pool = new Pool({
  connectionString: DATABASE_URL,
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
