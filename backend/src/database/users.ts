import { QueryResult } from "pg";

import db from "./../config/db";
import { User, CandidateUser } from "./../types/users";

type ReturnType = Promise<QueryResult<User>>;

class UsersTable {
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
            SELECT users.id, users.login, users.password, roles.name AS role 
            FROM users 
            JOIN roles ON users.role = roles.id
            WHERE id = $1
        `;
        const values = [id];

        return this.query(sql, values);
    }

    public findByLogin(login: string): ReturnType {
        const sql = `
            SELECT users.id, users.login, users.password, roles.name AS role 
            FROM users 
            JOIN roles ON users.role = roles.id
            WHERE login = $1
        `;
        const values = [login];

        return this.query(sql, values);
    }

    public getAll(): ReturnType {
        const sql = `
            SELECT users.id, users.login, users.password, roles.name AS role 
            FROM users 
            JOIN roles ON users.role = roles.id
        `;
        const values: string[] = [];

        return this.query(sql, values);
    }

    public add({ login, password, role }: CandidateUser): ReturnType {
        const sql = "INSERT INTO users(login, password, role) VALUES($1, $2, $3)";
        const values = [login, password, role];

        return this.query(sql, values);
    }

    public delete(id: number): ReturnType {
        const sql = "DELETE FROM users WHERE id = $1";
        const values = [id];

        return this.query(sql, values);
    }
}

export default new UsersTable();
