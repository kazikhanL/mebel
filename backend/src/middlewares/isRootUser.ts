import { Request, Response, NextFunction } from "express";

import usersTable from "./../database/users";
import errorHandler from "./../utilities/errorHandler";

const isRootUser = (request: Request, response: Response, next: NextFunction): void => {
    const login: string = request.body.userPayload.login;

    usersTable
        .findByLogin(login)
        .then((result) => {
            const user = result.rows[0];
            const isRootAdmin = user.role === "super";

            if (isRootAdmin) {
                next();
            } else {
                response.status(403).send("доступ запрешен");
            }
        })
        .catch(() => errorHandler(response));
};

export default isRootUser;
