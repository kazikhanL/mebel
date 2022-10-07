import { Router } from "express";

import { getUsers, addUser, deleteUser } from "./../controllers/users";
import isAuthorization from "./../middlewares/isAuthorization";
import isRootUser from "./../middlewares/isRootUser";
import userValidation from "../validators/users";

const usersRouter = Router();

usersRouter.get("/", isAuthorization, isRootUser, getUsers);
usersRouter.post("/", isAuthorization, isRootUser, userValidation, addUser);
usersRouter.delete("/:id", isAuthorization, isRootUser, deleteUser);

export default usersRouter;
