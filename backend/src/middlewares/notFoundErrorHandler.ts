import { Request, Response, NextFunction } from "express";

import { NOT_FOUND_ERROR } from "./../constants/errors";

const notFoundErrorHandler = (request: Request, response: Response, next: NextFunction): void => {
    response.status(404).send(NOT_FOUND_ERROR);
};

export default notFoundErrorHandler;
