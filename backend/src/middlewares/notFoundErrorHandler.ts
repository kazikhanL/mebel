import { Request, Response, NextFunction } from "express";

const notFoundErrorHandler = (request: Request, response: Response, next: NextFunction): void => {
    response.status(404).send("Ничего не найдено!");
};

export default notFoundErrorHandler;
