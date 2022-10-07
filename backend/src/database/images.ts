import { QueryResult } from "pg";

import db from "./../config/db";
import { Image } from "./../types/images";

type ReturnType = Promise<QueryResult<Image>>;

class imagesTable {
    private query(sql: string, values: any[]): ReturnType {
        return new Promise((resolve, reject) => {
            db
                .query(sql, values)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    public findByID(id: number): ReturnType {
        const sql = `
            SELECT id, create_at AS createAt, path, name
            FROM images 
            WHERE id = $1
        `;
        const values = [id];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = "DELETE FROM images WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }

    public add(name: string, path: string): ReturnType {
        const sql = "INSERT INTO images(name, path) VALUES($1, $2)";
        const values = [name, path];

        return this.query(sql, values);
    }

    public get(page: number, pageSize: number): ReturnType {
        const sql = `
            SELECT id, create_at AS createAt, path, name
            FROM images 
            ORDER BY create_at DESC
            LIMIT $1 OFFSET $2
        `;
        const values = [pageSize, ((page - 1) * pageSize)];

        return this.query(sql, values);
    }
}

export default new imagesTable();

