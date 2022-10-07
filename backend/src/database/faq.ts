import { QueryResult } from "pg";

import db from "./../config/db";
import FAQ from "./../types/faq";

type ReturnType = Promise<QueryResult<FAQ>>;

class FaqTable {
    private query(sql: string, values: any[]): ReturnType {
        return new Promise((resolve, reject) => {
            db
                .query(sql, values)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }

    public findByID(id: number): ReturnType {
        const sql = "SELECT * FROM faq WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }

    public getAll(): ReturnType {
        const sql = "SELECT * FROM faq";
        const values: string[] = [];

        return this.query(sql, values);
    }

    public add({ question, answer }: FAQ): ReturnType {
        const sql = "INSERT INTO faq(question, answer) VALUES($1, $2)";
        const values = [question, answer];

        return this.query(sql, values);
    }

    public update({ id, question, answer }: FAQ): ReturnType {
        const sql = "UPDATE faq SET question = $1, answer = $2 WHERE id = $3";
        const values = [question, answer, id];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = "DELETE FROM faq WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }
}

export default new FaqTable();
