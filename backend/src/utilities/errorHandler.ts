import { Response } from "express";

import { SERVER_ERROR } from "./../constants/errors";

const errorHandler = (response: Response) => response.status(500).send(SERVER_ERROR);

export default errorHandler;
