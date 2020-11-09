const database = require ('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
    // TODO use data object correctly
    const query = `INSERT INTO track VALUES ('${data}');`;
    return database.query(query);
}

exports.readAll = async function() {
    const query = 'SELECT * FROM track;';
    return database.query(query);
}

exports.readOne = async function(uri) {
    // TODO use uri object correctly
    const query = `SELECT * FROM track WHERE track_uri = '${uri}';`;
    return database.query(query);
}

exports.updateOne = async function(uri, data) {
    // TODO use object correctly
    const query = `UPDATE track SET track_uri = '${data}', duration_ms = '${data}', track_type = '${data}', track_name = = '${data}', preview_url = '${data}', energy = '${data}', tempo = '${data}', popularity = '${data}' WHERE track_uri = '${uri}';`;
    return database.query(query);
}

exports.destroyOne = async function(uri) {
    const query = `DELETE FROM track WHERE track_uri = '${uri}';`;
    return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getPlaylist = async function(uri) {
    // TODO Avery
    const query = `SELECT * from track_playlist AS tp JOIN playlist USING (playlist_uri) WHERE playlist_uri = '${uri}';`;
    return database.query(query);
}

exports.getArtists = async function(uri) {
    const query = `SELECT * from track JOIN artist_track USING (track_uri) JOIN artist USING (artist_uri) WHERE track.track_uri ='${uri}';`;
    return database.query(query);
}
