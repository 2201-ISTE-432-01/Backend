import SpotifyApplication from "../SpotifyApplication";

export default class Track {

    private static readonly database = SpotifyApplication.getInstance().getDatabase()

    //////////
    // CRUD //
    //////////

    static async create (data: any) {
        // TODO Avery
    }

    static async readAll() {
        // TODO Avery
    }

    static async readOne(uri: string) {
        // TODO Avery
    }

    static async updateOne(uri: string, data: any) {
        // TODO Avery
    }

    static async destroyOne(uri: string) {
        // TODO Avery
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getPlaylist(uri: string) {
        // TODO Avery
    }

    static async getArtists(uri: string) {
        // TODO Avery
    }
}

