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
		const query = `INSERT INTO user (user_uri, display_name) VALUES ('${data.user_uri}', '${data.display_name}');`;
		return this.getdatabase().query(query);
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
		const query = `UPDATE user SET user_uri = '${data.user_uri}', display_name = '${data.display_name}';`;
		return this.getdatabase().query(query);
	}

	static async destroyOne(uri: string) {
		const query = `DELETE FROM user WHERE user_uri = '${uri}';`;
		return this.getdatabase().query(query);
	}

	///////////////
	// RELATIONS //
	///////////////

	static async getPlaylists(uri: string) {
		const query = `SELECT * FROM playlist JOIN user using (user_uri) WHERE user_uri = '${uri}';`;
		return this.getdatabase().query(query);
	}
}
