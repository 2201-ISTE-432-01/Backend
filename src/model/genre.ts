import SpotifyApplication from "../SpotifyApplication";
import Database from "../database/Database";

export default class Genre {

    private static readonly database = SpotifyApplication.getInstance().getDatabase()

    //////////
    // CRUD //
    //////////

    static async create (data: any) {
        const query = `INSERT INTO genre (genre_id,genre_name) VALUES ('${data.genre_id}','${data.genre_name}');`;
        return this.database.query(query);
    }

    static async readAll() {
        const query = 'SELECT genre_id,genre_name FROM genre;';
        return this.database.query(query);
    }

    static async readOne(id: number) {
        const query = `SELECT genre_id,genre_name FROM genre WHERE genre_id = '${id}';`;
        return this.database.query(query);
    }

    static async updateOne(id: number, data: any) {
        const query = `UPDATE genre SET genre_id = '${data.genre_id}', genre_name = '${data.genre_name}' WHERE genre_id = '${id}';`
        return this.database.query(query);
    }

    static async destroyOne(id: number) {
        const query = `DELETE FROM genre WHERE genre_id = '${id}'`;
        return this.database.query(query);
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getArtists(id: number) {
        const query = `SELECT * FROM genre_artist AS ga JOIN artist AS a USING (artist_uri) WHERE ga.genre_id = '${id}';`;
        return this.database.query(query);
    }
}





