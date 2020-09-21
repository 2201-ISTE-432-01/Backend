const { Pool}  = require('pg');

DATABASE_URL = 'postgres://user:password@localhost:5432/spotify';

const pool = new Pool({
  connectionString: DATABASE_URL,
});

function query(text) {
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

module.exports = {
	query
}
