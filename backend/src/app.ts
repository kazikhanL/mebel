import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import fileUpload from "express-fileupload";

import authorizationRouter from "./routers/authorization";
import usersRouter from "./routers/users";
import faqRouter from "./routers/faq";
import imagesRouter from "./routers/images";
import notFoundErrorHandler from "./middlewares/notFoundErrorHandler";
import serverErrorHandler from "./middlewares/serverErrorHandler";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(cors());
app.use(fileUpload());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/authorization", authorizationRouter);
app.use("/users", usersRouter);
app.use("/faq", faqRouter);
app.use("/images", imagesRouter);

app.use(notFoundErrorHandler);  // 404 error
app.use(serverErrorHandler);    // 500 error

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});
