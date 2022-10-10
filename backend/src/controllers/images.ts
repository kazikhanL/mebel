import path from "path";
import { v1 as uuidv1 } from "uuid";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import errorHandler from "./../utilities/errorHandler";
import imagesTable from "./../database/images";

export const getImages = (request: Request, response: Response): void => {
    const page = Number.parseInt(request.query.page as string);
    const pageSize = Number.parseInt(request.query.pageSize as string);

    imagesTable
        .get(page, pageSize)
        .then((result) => response.json(result.rows))
        .catch(() => errorHandler(response));
};

export const addImage = (request: Request, response: Response): void => {
    const images = request.files?.images;
    const files: UploadedFile[] = [];

    if (images === undefined) return;

    if (Array.isArray(images)) {
        files.push(...images);
    } else {
        files.push(images);
    }

    files.forEach((file) => {
        const dbPath = `public/uploads/${uuidv1()}.${file.name}`;
        const uploadPath = path.resolve(__dirname, "../../", dbPath);

        file
            .mv(uploadPath)
            .then(() => {
                imagesTable
                    .add(file.name, dbPath)
                    .catch(() => {
                        errorHandler(response);
                        process.exit();
                    });
            })
            .catch(() => {
                response.status(500).send(`ошибка скачивание файла ${file.name}`);
                process.exit();
            });
    });

    response.status(200).send("файлы скаченны");
};

export const deleteImage = (request: Request, response: Response): void => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
        response.status(400).send("не коректнный id");
        return;
    }

    imagesTable
        .findByID(id)
        .then((result) => {
            const isExists = result.rows.length > 0;

            if (isExists) {
                imagesTable
                    .delete(id)
                    .then(() => response.send("файл удален"))
                    .catch(() => response.status(500).send("ошибка удаления файла"));
            } else {
                response.status(404).send("файла не сушетсвует");
            }
        })
        .catch(() => errorHandler(response));
};
