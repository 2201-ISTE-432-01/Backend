const database = require('../database');

exports.getAll = async function () {
	const getAllQuery = 'select * FROM users';
	return database.query(getAllQuery);
}
