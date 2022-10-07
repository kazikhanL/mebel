import { Router } from "express";

import { login } from "./../controllers/authorization";
import loginValidation from "../validators/authorization";

const authorizationRouter = Router();

authorizationRouter.post("/", loginValidation, login);

export default authorizationRouter;
