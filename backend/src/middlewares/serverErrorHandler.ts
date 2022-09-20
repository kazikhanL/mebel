import { Request, Response, NextFunction } from "express";

const serverErrorHandler = (error: Error, request: Request, response: Response, next: NextFunction): void => {
    response.status(500).send("Ошибка сервера");
};

export default serverErrorHandler;
