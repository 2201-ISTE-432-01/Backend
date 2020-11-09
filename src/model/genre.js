const database = require ('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
    const query = `INSERT INTO genre (genre_id,genre_name) VALUES ('${data.genre_id}','${data.genre_name}');`;
    return database.query(query);
}

exports.readAll = async function() {
    const query = 'SELECT genre_id,genre_name FROM genre;';
    return database.query(query);
}

exports.readOne = async function(id) {
    const query = `SELECT genre_id,genre_name FROM genre WHERE genre_id = '${id}';`;
    return database.query(query);
}

exports.updateOne = async function(id, data) {
    const query = `UPDATE genre SET genre_id = '${data.genre_id}', genre_name = '${data.genre_name}' WHERE genre_id = '${id}';`
    return database.query(query);
}

exports.destroyOne = async function(uri) {
    const query = `DELETE FROM genre WHERE genre_id = '${uri}'`;
    return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getArtists = async function(id) {
    const query = `SELECT * FROM genre_artist AS ga JOIN artist AS a USING (artist_uri) WHERE ga.genre_id = '${id}';`;
    return database.query(query);
}
