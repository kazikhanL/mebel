import { Request, Response, NextFunction } from "express";

export const validate = (request: Request, response: Response, next: NextFunction): void => {
    const page = Number.parseInt(request.query.page as string);
    const pageSize = Number.parseInt(request.query.pageSize as string);

    if (Number.isNaN(page)) request.query.page = "1";
    if (Number.isNaN(pageSize)) request.query.pageSize = "25";

    next();
};

export const validateAdd = (request: Request, response: Response, next: NextFunction): void => {
    if (request.files?.images === undefined) {
        response.status(400).send("загрузите файл(ы) в поле 'images'");
    } else {
        next();
    }
};
