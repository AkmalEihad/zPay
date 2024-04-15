import * as schema from "./schema";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DB_URL!,
})

const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>

export default db

