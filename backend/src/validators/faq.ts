import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const faqValidationShema = Joi.object({
    answer: Joi.string().required(),
    question: Joi.string().required(),
});

const faqItemValidationShema = Joi.object({
    id: Joi.number().min(0).required(),
    answer: Joi.string().required(),
    question: Joi.string().required(),
});

export const faqValidation = (request: Request, response: Response, next: NextFunction): void => {
    if (request.body.faq === undefined) {
        response.status(400).send("не коректнный JSON -> требуется поле faq");
        return;
    }

    const { error } = faqValidationShema.validate(request.body.faq);

    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
};

export const faqItemValidation = (request: Request, response: Response, next: NextFunction): void => {
    if (request.body.faq === undefined) {
        response.status(400).send("не коректнный JSON -> требуется поле faq");
        return;
    }
    
    const { error } = faqItemValidationShema.validate(request.body.faq);

    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
};
