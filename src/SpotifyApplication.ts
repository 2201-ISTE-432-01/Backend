import Database from "./database/Database";
import PostgresDatabase from "./database/PostgresDatabase";
import AppFactory from "./AppFactory";
import {Express} from "express";

export default class SpotifyApplication {

	private static instance: SpotifyApplication

	private readonly app: Express
	private readonly db: Database

	private constructor() {
		this.app = AppFactory.createApp()
		this.db = new PostgresDatabase()
	}

	public static getInstance(): SpotifyApplication {
		if (!this.instance) {
			this.instance = new SpotifyApplication()
		}

		return this.instance
	}

	public start() {
		this.app.listen(process.env.APP_PORT, () => {
			console.log(`Server listening on port ${process.env.APP_PORT}`);
		})
	}

	public getDatabase(): Database {
		return this.db
	}
}
