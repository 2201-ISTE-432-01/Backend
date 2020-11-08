const database = require ('../database');

//////////
// CRUD //
//////////

exports.create = async function(data) {
    // TODO Not sure how to use data object here
    const query = `INSERT INTO genre (genre_id,genre_name) VALUES ('${data}';`;
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
    // TODO Not sure how to use the data and ID objects
    const query = `UPDATE genre SET genre_id = '${data}', genre_name = '${data}' WHERE genre_id = '${id}';`
    return database.query(query);
}

exports.destroyOne = async function(uri) {
    // TODO how to use uri object
    const query = `DELETE FROM genre WHERE genre_id = '${uri}'`;
    return database.query(query);
}

///////////////
// RELATIONS //
///////////////

exports.getArtists = async function(id) {
    // TODO use id object correctly
    const query = `SELECT * FROM genre_artist AS ga JOIN artist AS a USING (artist_uri) WHERE ga.genre_id = '${id}';`;
    return database.query(query);
}
