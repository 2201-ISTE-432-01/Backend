const database = require('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
	const query = `INSERT INTO user (user_uri, display_name) VALUES ('${data.user_uri}', '${data.display_name}');`;
	return database.query(query);
}

exports.readAll = async function () {
	const query = 'select * FROM user;';
	return database.query(query);
}

exports.readOne = async function(uri) {
	const query = `SELECT * FROM user WHERE user_uri='${uri}';`;
	return database.query(query);
}

exports.updateOne = async function(uri, data) {
	const query = `UPDATE user SET user_uri = '${data.user_uri}', display_name = '${data.display_name}';`;
	return database.query(query);
}

exports.destroyOne = async function(uri) {
	const query = `DELETE FROM user WHERE user_uri = '${uri}';`;
	return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getPlaylists = async function(uri) {
	const query = `SELECT * FROM playlist JOIN user using (user_uri) WHERE user_uri = '${uri}';`;
	return database.query(query);
}
