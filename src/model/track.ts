import SpotifyApplication from "../SpotifyApplication";

export default class Track {

    private static readonly database = SpotifyApplication.getInstance().getDatabase()

    //////////
    // CRUD //
    //////////

    static async create (data: any) {
        const query = `INSERT INTO track (track_uri,track_name,track_type,duration_ms,preview_url,energy,popularity,tempo) VALUES ('${data.track_uri}', '${data.track_name}', '${data.track_type}', '${data.duration_ms}', '${data.preview_url}', '${data.energy}', '${data.popularity}', '${data.tempo}');`;
        return this.database.query(query);
    }

    static async readAll() {
        const query = 'SELECT * FROM track;';
        return this.database.query(query);
    }

    static async readOne(uri: string) {
        const query = `SELECT * FROM track WHERE track_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async updateOne(uri: string, data: any) {
        const query = `UPDATE track SET track_uri = '${data.track_uri}', duration_ms = '${data.duration_ms}', track_type = '${data.track_type}', track_name = = '${data.track_name}', preview_url = '${data.preview_url}', energy = '${data.energy}', tempo = '${data.tempo}', popularity = '${data.popularity}' WHERE track_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async destroyOne(uri: string) {
        const query = `DELETE FROM track WHERE track_uri = '${uri}';`;
        return this.database.query(query);
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getPlaylist(uri: string) {
        const query = `SELECT * from track_playlist AS tp JOIN playlist USING (playlist_uri) WHERE playlist_uri = '${uri}';`;
        return this.database.query(query);
    }

    static async getArtists(uri: string) {
        const query = `SELECT * from track JOIN artist_track USING (track_uri) JOIN artist USING (artist_uri) WHERE track.track_uri ='${uri}';`;
        return this.database.query(query);
    }
}

