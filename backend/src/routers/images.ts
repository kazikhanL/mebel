import { Router } from "express";

import { addImage, deleteImage, getImages } from "./../controllers/images";

const imagesRouter = Router();

imagesRouter.get("/", getImages);
imagesRouter.post("/", addImage);
imagesRouter.delete("/:id", deleteImage);

export default imagesRouter;
