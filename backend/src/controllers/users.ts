import argon2d from "argon2";
import { Request, Response } from "express";

import { CandidateUser } from "./../types/users";
import { prepareUsers } from "./../utilities/users";
import usersTable from "./../database/users";
import errorHandler from "./../utilities/errorHandler";

export const getUsers = (request: Request, response: Response): void => {
    usersTable
        .getAll()
        .then((result) => {
            const users = prepareUsers(result.rows);

            response.json(users);
        })
        .catch(() => errorHandler(response));
};

export const addUser = (request: Request, response: Response): void => {
    const candidate: CandidateUser = request.body.user;

    usersTable
        .findByLogin(candidate.login)
        .then((result) => {
            const isExists = result.rows.length > 0;

            if (isExists) {
                response.status(400).send("пользователь уже сушествует");
            } else {
                argon2d
                    .hash(candidate.password)
                    .then((hashPassword) => {
                        candidate.password = hashPassword;

                        usersTable
                            .add(candidate)
                            .then(() => response.status(201).send("пользователь создан"))
                            .catch(() => errorHandler(response));
                    })
                    .catch(() => errorHandler(response));
            }
        })
        .catch(() => errorHandler(response));
};

export const deleteUser = (request: Request, response: Response): void => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
        response.status(400).send("не коректнный id");
        return;
    }

    usersTable
        .findByID(id)
        .then((result) => {
            const isExists = result.rows.length > 0;

            if (isExists) {
                usersTable
                    .delete(id)
                    .then(() => response.send("пользователь удален"))
                    .catch(() => errorHandler(response));
            } else {
                response.status(400).send("пользователь не сушествует");
            }
        })
        .catch(() => errorHandler(response));
};
