const database = require ('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
    const query = `INSERT INTO artist (artist_uri,artist_name,popularity) values ('${data.artist_uri}', '${data.artist_name}', '${data.popularity}');`;
    return database.query(query);
}

exports.readAll = async function() {
    const query = 'SELECT artist_uri,artist_name,popularity FROM artist;';
    return database.query(query);
}

exports.readOne = async function(uri) {
    const query = `SELECT artist_uri,artist_name,popularity FROM artist where artist_uri='${uri}';`;
    return database.query(query);
}

exports.updateOne = async function(uri, data) {
    const query = `UPDATE artist SET artist_uri = '${data.artist_uri}',artist_name = '${data.artist_name}',popularity = '${data.popularity}' WHERE artist_uri = '${uri}';`;
    return database.query(query);
}

exports.destroyOne = async function(uri) {
    const query = `DELETE FROM artist WHERE artist_uri = '${uri}';`;
    return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getTracks = async function(uri) {
    const query = `SELECT * from artist_track AS at join track using (track_uri) where at.artist_uri = '${uri};'`;
    return database.query(query);
}

exports.getGenre = async function(uri) {
    const query = `SELECT g.genre_name FROM genre_artist AS ga JOIN genre AS g USING (genre_id) WHERE ga.artist_uri = '${uri}';`;
    return database.query(query);
}
