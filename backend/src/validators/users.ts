import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const userValidationShema = Joi.object({
    login: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
    repeatPassword: Joi.ref("password"),
    role: Joi.number().min(1).max(3),
});

const userValidation = (request: Request, response: Response, next: NextFunction): void => {
    const { error } = userValidationShema.validate(request.body.user);

    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
};

export default  userValidation;
