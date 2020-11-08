import SpotifyApplication from "../SpotifyApplication";
import Database from "../database/Database";

export default class User {

	// Temporary shunt
	private static getdatabase() {
		return SpotifyApplication.getInstance().getDatabase()
	}

	//////////
	// CRUD //
	//////////

	static async create (data: any) {
		// TODO Avery
	}

	static async readAll() {
		const query = 'select * FROM user';
		return this.getdatabase().query(query);
	}

	static async readOne(uri: string) {
		const query = `SELECT * FROM user WHERE user_uri='${uri}'`
		return this.getdatabase().query(query)
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

	static async getPlaylists(uri: string) {
		// TODO Avery
	}
}
