import { QueryResult } from "pg";

import db from "./../../config/db";
import { IGoodsItem, ClientGoodsItem } from "./../../types/news";

type ReturnType = Promise<QueryResult<IGoodsItem>>;

class GoodsTable {
    private query(sql: string, values: any[]): ReturnType {
        return new Promise((resolve, reject) => {
            db
                .query(sql, values)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    public add(newsId: number, item: ClientGoodsItem): ReturnType {
        const sql = `
            INSERT INTO news_goods (name, url, news_id)
            VALUES ($1, $2, $3)
        `;
        const values = [item.name, item.url, newsId];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = "DELETE FROM news_goods WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }

    public get(newsId: number): ReturnType {
        const sql = "SELECT * FROM news_goods WHERE news_id = $1";
        const values = [newsId];

        return this.query(sql, values);
    }
}

export default GoodsTable;
