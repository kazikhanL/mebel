import { QueryResult } from "pg";

import db from "./../../config/db";
import { Meta, ClientMeta } from "./../../types/meta";

type ReturnType = Promise<QueryResult<Meta>>;

class MetaTable {
    private query(sql: string, values: any[]): ReturnType {
        return new Promise((resolve, reject) => {
            db
                .query(sql, values)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    public add({ title, description, url }: ClientMeta): ReturnType {
        const sql = `
            INSERT INTO news_meta (title, description, url)
            VALUES ($1, $2, $3)
        `;
        const values = [title, description, url];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = "DELETE FROM news_meta WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }

    public get(id: number): ReturnType {
        const sql = "SELECT * FROM news_meta WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }

    public update(id: number, { title, description, url }: ClientMeta): ReturnType {
        const sql = `
            UPDATE news_meta
            SET title = $1, description = $2, url = $3
            WHERE id = $4
        `;
        const values = [title, description, url, id];

        return this.query(sql, values);
    }
}

export default MetaTable;
