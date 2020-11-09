const database = require('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
	// TODO Avery
}

exports.readAll = async function () {
	const query = 'select * FROM user;';
	return database.query(query);
}

exports.readOne = async function(uri) {
	const query = `SELECT * FROM user WHERE user_uri='${uri}';`
	return database.query(query)
}

exports.updateOne = async function(uri, data) {
	// TODO Avery
}

exports.destroyOne = async function(uri) {
	// TODO Avery
}

///////////////
// RELATIONS //
///////////////

exports.getPlaylists = async function(uri) {
	// TODO Avery
}
