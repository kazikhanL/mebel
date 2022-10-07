import { Request, Response, NextFunction } from "express";

import { SERVER_ERROR } from "./../constants/errors";

const serverErrorHandler = (error: Error, request: Request, response: Response, next: NextFunction): void => {
    response.status(500).send(SERVER_ERROR);
};

export default serverErrorHandler;
