import SpotifyApplication from "../SpotifyApplication";
import Database from "../database/Database";

export default class Artist {

    private static readonly database = SpotifyApplication.getInstance().getDatabase()

    //////////
    // CRUD //
    //////////

    static async create (data: any) {
        const query = `INSERT INTO artist (artist_uri,artist_name,popularity) values ('${data.artist_uri}', '${data.artist_name}', '${data.popularity}');`;
        return this.database.query(query);
    }

    static async readAll() {
        const query = 'SELECT artist_uri,artist_name,popularity FROM artist;';
        return this.database.query(query);
    }

    static async readOne(uri: string) {
        const query = `SELECT artist_uri,artist_name,popularity FROM artist where artist_uri='${uri}';`;
        return this.database.query(query);
    }

    static async updateOne(uri: string, data: any) {
        const query = `UPDATE artist SET artist_uri = '${data.artist_uri}',artist_name = '${data.artist_name}',popularity = '${data.popularity}' WHERE artist_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async destroyOne(uri: string) {
        const query = `DELETE FROM artist WHERE artist_uri = '${uri}';`;
        return this.database.query(query);
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getTracks(uri: string) {
        const query = `SELECT * from artist_track AS at join track using (track_uri) where at.artist_uri = '${uri};'`;
        return this.database.query(query);
    }

    static async getGenre(uri: string) {
        const query = `SELECT g.genre_name FROM genre_artist AS ga JOIN genre AS g USING (genre_id) WHERE ga.artist_uri = '${uri}';`;
        return this.database.query(query);
    }
}
