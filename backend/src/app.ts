import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";

import notFoundErrorHandler from "./middlewares/notFoundErrorHandler";
import serverErrorHandler from "./middlewares/serverErrorHandler";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(notFoundErrorHandler);  // 404 error
app.use(serverErrorHandler);    // 500 error

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});
