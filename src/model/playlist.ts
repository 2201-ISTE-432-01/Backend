import Database from "../database/Database";

const SpotifyApplication = require('../SpotifyApplication')

export default class Playlist {

    private static readonly database = SpotifyApplication.getInstance().getDatabase()

    //////////
    // CRUD //
    //////////

    static async create (data: any) {
        const query = `INSERT INTO playlist (playlist_uri,name,description,energy,tempo) VALUES ('${data.playlist_uri}', '${data.name}', '${data.description}', '${data.energy}', '${data.tempo}');`;
        return this.database.query(query);
    }

    static async readAll() {
        const query = 'SELECT * FROM playlist;';
        return this.database.query(query);
    }

    static async readOne(uri: string) {
        const query = `SELECT * FROM playlist WHERE playlist_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async updateOne(uri: string, data: any) {
        const query = `UPDATE playlist SET playlist_uri = '${data.playlist_uri}', name = '${data.name}', description = '${data.description}', energy = '${data.energy}', tempo = '${data.energy}' WHERE playlist_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async destroyOne(uri: string) {
        const query = `DELETE FROM playlist WHERE playlist_uri = '${uri}';`
        return this.database.query(query);
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getUser(uri: string) {
        // TODO Problem with ERD nothing to join user and playlist on
        const query = `SELECT * FROM playlist JOIN user USING (playlist_uri) WHERE playlist_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async getTracks(uri: string) {
        const query = `SELECT * FROM track_playlist JOIN track using (track_uri) WHERE playlist_uri = '${uri}';`;
        return this.database.query(query);
    }

}



