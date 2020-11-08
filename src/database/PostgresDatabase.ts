import { Pool } from 'pg'

export default class PostgresDatabase {

    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: process.env.APP_POSTGRES_STRING
        })
    }

    query(query: string): Promise<any> {
        return this.pool.query(query)
    }
}
