const database = require('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
	// TODO Avery
	const query = `INSERT INTO user VALUES (${data});`;
        return database.query(query);
}

exports.readAll = async function () {
	const query = 'select * FROM user;';
	return database.query(query);
}

exports.readOne = async function(uri) {
	const query = `SELECT * FROM user WHERE user_uri='${uri}';`
	return database.query(query);
}

exports.updateOne = async function(uri, data) {
	// TODO Avery
	const query = `UPDATE user SET user_uri = '${data}', display_name = '${data}';`;
	return database.query(query);
}

exports.destroyOne = async function(uri) {
	// TODO Avery
	const query = `DELETE FROM user WHERE user_uri = '${uri}';`
        return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getPlaylists = async function(uri) {
	// TODO Avery
	const query = `SELECT * FROM playlist JOIN user using (user_uri) WHERE user_uri = '${uri}';`;
        return database.query(query);
}
