import { Router } from "express";

import { getFaq, addFaq, updateFaq, deleteFaq } from "./../controllers/faq";
import isAuthorization from "./../middlewares/isAuthorization";
import { faqValidation, faqItemValidation } from "./../validators/faq";

const faqRouter = Router();

faqRouter.get("/", getFaq);
faqRouter.post("/", isAuthorization, faqValidation, addFaq);
faqRouter.put("/", isAuthorization, faqItemValidation, updateFaq);
faqRouter.delete("/:id", isAuthorization, deleteFaq);

export default faqRouter;
