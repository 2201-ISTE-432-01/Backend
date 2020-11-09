import { Pool } from 'pg'
import Database from "./Database";

export default class PostgresDatabase implements Database {

    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: process.env.APP_POSTGRES_STRING
        })
    }

    async query(query: string): Promise<any> {
        return this.pool.query(query)
    }
}
