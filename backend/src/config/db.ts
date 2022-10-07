import "dotenv/config";
import { Pool, PoolConfig } from "pg";

const config: PoolConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
};

const pool = new Pool(config);

export default pool;
