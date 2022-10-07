import "dotenv/config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { SERVER_ERROR, NOT_VALID_TOKEN_ERROR, NOT_AUTHORIZATION_ERROR } from "./../constants/errors";

const isAuthorization = (request: Request, response: Response, next: NextFunction): void => {
    const secret = process.env.JWT_SECRET as string;

    if (request.headers.authorization === undefined) {
        response.status(401).send(NOT_AUTHORIZATION_ERROR);
        return;
    }

    try {
        const token = request.headers.authorization.slice(7);
        const decoded = jwt.verify(token, secret);

        request.body.userPayload = decoded;
        
        next();
    } catch (error) {
        response.status(401).send(NOT_VALID_TOKEN_ERROR);
    }
};

export default isAuthorization;
