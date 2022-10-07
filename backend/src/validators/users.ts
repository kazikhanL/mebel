import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const userValidationShema = Joi.object({
    login: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
    repeatPassword: Joi.ref("password"),
    role: Joi.number().min(1).max(3),
});

const userValidation = (request: Request, response: Response, next: NextFunction): void => {
    if (request.body.user === undefined) {
        response.status(400).send("не коректнный JSON -> требуется поле user");
        return;
    }

    const { error } = userValidationShema.validate(request.body.user);

    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
};

export default  userValidation;
