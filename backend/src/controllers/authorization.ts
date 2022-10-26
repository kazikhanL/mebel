import "dotenv/config";
import jwt from "jsonwebtoken";
import argon2d from "argon2";
import { Request, Response } from "express";

import usersTable from "./../database/users";
import { LoginUser } from "./../types/users";
import errorHandler from "../utilities/errorHandler";

export const login = (request: Request, response: Response): void => {
    const JWT_SECRET = process.env.JWT_SECRET as string;
    const NOT_VALID_DATA_ERROR = "не вернный логин или пароль";

    const clientUser: LoginUser = request.body.user;

    usersTable
        .findByLogin(clientUser.login)
        .then((result) => {
            const userExists = result.rows.length > 0;

            return userExists ? result.rows[0] : null;
        })
        .then((user) => {
            if (user === null) {
                response.status(401).send(NOT_VALID_DATA_ERROR);
                return;
            }

            return argon2d.verify(user.password, clientUser.password);
        })
        .then((isPasswordsMatch) => {
            if (isPasswordsMatch !== undefined && isPasswordsMatch === false) {
                response.status(401).send(NOT_VALID_DATA_ERROR);
                return;
            }

            const token = jwt.sign({ login: clientUser.login }, JWT_SECRET, { expiresIn: "1d" });

            response.json({ token });
        })
        .catch(() => errorHandler(response));
};
