const database = require('../database');

const User = {
  async getAll(req, res) {
    try {
	  const getAllQuery = 'SELECT * FROM users';
	  const { rows } = await database.query(getAllQuery);
	  return res.send({rows});
	} catch (error) {
	  return res.send(error);
	}
  }
};

module.exports = User;
