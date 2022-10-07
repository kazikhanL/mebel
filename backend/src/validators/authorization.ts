import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const loginValidationSchema = Joi.object({
    login: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(6).max(255).required(),
});

const loginValidation = (request: Request, response: Response, next: NextFunction): void => {
    if (request.body.user === undefined) {
        response.status(400).send("не коректнный JSON -> требуется поле user");
        return;
    }
    
    const { error } = loginValidationSchema.validate(request.body.user);

    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
};

export default loginValidation;
