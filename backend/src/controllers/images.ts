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

// TODO: РЕФАКТОРИТЬ
export const addImage = (request: Request, response: Response): void => {
    const images = request.files?.images;
    const files: UploadedFile[] = [];

    if (images === undefined) {
        response.status(400).send("загрузите файл(ы)");
        return;
    }

    if (Array.isArray(images)) {
        files.push(...images);
    } else {
        files.push(images);
    }

    files.forEach((file) => {
        const uploadPath = path.resolve(__dirname, "../../public/uploads", `${uuidv1()}.${file.name}`);

        file
            .mv(uploadPath)
            .then(() => {
                imagesTable
                    .add(file.name, uploadPath)
                    .catch((err) => {
                        console.log(err);
                        
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
    response.send("images");

};

