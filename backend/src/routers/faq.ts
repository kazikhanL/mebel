import { Router } from "express";

import { getFaq, addFaq, updateFaq, deleteFaq } from "./../controllers/faq";
import isAuthorization from "./../middlewares/isAuthorization";

const faqRouter = Router();

faqRouter.get("/", getFaq);
faqRouter.post("/", isAuthorization, addFaq);
faqRouter.put("/", isAuthorization, updateFaq);
faqRouter.delete("/:id", isAuthorization, deleteFaq);

export default faqRouter;
