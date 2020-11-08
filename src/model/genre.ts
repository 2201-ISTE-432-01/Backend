import SpotifyApplication from "../SpotifyApplication";
import Database from "../database/Database";

export default class Genre {

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

    static async readOne(id: number) {
        // TODO Avery
    }

    static async updateOne(id: number, data: any) {
        // TODO Avery
    }

    static async destroyOne(id: number) {
        // TODO Avery
    }

    ///////////////
    // RELATIONS //
    ///////////////

    static async getArtists(id: number) {
        // TODO Avery
    }
}





