const database = require ('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
    // TODO use data object correctly
    const query = `INSERT INTO playlist VALUES (${data});`;
    return database.query(query);
}

exports.readAll = async function() {
    const query = 'SELECT * FROM playlist;';
    return database.query(query);
}

exports.readOne = async function(uri) {
    const query = `SELECT * FROM playlist WHERE playlist_uri = '${uri}';`;
    return database.query(query);
}

exports.updateOne = async function(uri, data) {
    // TODO use objects correctly
    const query = `UPDATE playlist SET playlist_uri = '${data}', name = '${data}', description = '${data}', energy = '${data}', tempo = '${data}' WHERE playlist_uri = '${uri}';`;
    return database.query(query);
}

exports.destroyOne = async function(uri) {
    const query = `DELETE FROM playlist WHERE playlist_uri = '${uri}';`
    return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getUser = async function(uri) {
    // TODO Problem with ERD nothing to join user and playlist on
    const query = `SELECT * FROM playlist JOIN user USING (playlist_uri) WHERE playlist_uri = '${uri}';`;
    return database.query(query);
}

exports.getTracks = async function(uri) {
    const query = `SELECT * FROM track_playlist JOIN track using (track_uri) WHERE playlist_uri = '${uri}';`;
    return database.query(query);
}
