import { QueryResult } from "pg";

import db from "./../../config/db";
import { Seo, ClientSeo } from "./../../types/seo";

type ReturnType = Promise<QueryResult<Seo>>;

class SeoTable {
    private tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    private query(sql: string, values: any[]): ReturnType {
        return new Promise((resolve, reject) => {
            db
                .query(sql, values)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    public getByID(id: number): ReturnType {
        const sql = `SELECT * FROM ${this.tableName} WHERE id = $1`;
        const values = [id];

        return this.query(sql, values);
    }

    public add({ title, content, image }: ClientSeo): ReturnType {
        const sql = `
            INSERT INTO ${this.tableName}(title, content, image)
            VALUES($1, $2, $3)
        `;
        const values = [title, content, image];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = `DELETE FROM ${this.tableName} WHERE id = $1`;
        const values = [id];

        return this.query(sql, values);
    }
}

export default SeoTable;