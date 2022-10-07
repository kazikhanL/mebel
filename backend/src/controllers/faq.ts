import { Request, Response } from "express";

import FAQ from "./../types/faq";
import faqTable from "./../database/faq";
import errorHandler from "./../utilities/errorHandler";

export const getFaq = (request: Request, response: Response): void => {
    faqTable
        .getAll()
        .then((result) => response.json(result.rows))
        .catch(() => errorHandler(response));
};

export const addFaq = (request: Request, response: Response): void => {
    const newFaqItem: FAQ = request.body.faq;

    faqTable
        .add(newFaqItem)
        .then(() => response.status(201).send("вопрос создан"))
        .catch(() => errorHandler(response));
};

export const updateFaq = (request: Request, response: Response): void => {
    const faqItem: FAQ = request.body.faq;

    faqTable
        .findByID(faqItem.id)
        .then((result) => {
            const isExists = result.rows.length > 0;

            if (isExists) {
                faqTable
                    .update(faqItem)
                    .then(() => response.send("вопрос обновлен"))
                    .catch(() => errorHandler(response));
            } else {
                response.status(400).send("с таким id не чего не найденно");
            }
        })
        .catch(() => errorHandler(response));
};

export const deleteFaq = (request: Request, response: Response): void => {
    const id = Number(request.params.id);

    faqTable
        .findByID(id)
        .then((result) => {
            const isExists = result.rows.length > 0;

            if (isExists) {
                faqTable
                    .delete(id)
                    .then(() => response.send("вопрос удален"))
                    .catch(() => errorHandler(response));
            } else {
                response.status(400).send("с таким id не чего не найденно");
            }
        })
        .catch(() => errorHandler(response));
};
