import { Router } from "express";

import { addImage, deleteImage, getImages } from "./../controllers/images";
import { validate, validateAdd } from "./../validators/images";

const imagesRouter = Router();

imagesRouter.get("/", validate, getImages);
imagesRouter.post("/", validateAdd, addImage);
imagesRouter.delete("/:id", deleteImage);

export default imagesRouter;
