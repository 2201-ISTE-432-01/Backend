import SpotifyApplication from "../SpotifyApplication";
import Database from "../database/Database";

export default class Artist {

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

    static async getTracks(uri: string) {
        // TODO Avery
    }

    static async getGenre(uri: string) {
        // TODO Avery
    }
}
