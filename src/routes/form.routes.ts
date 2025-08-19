import { Router } from "express";
import { getFormHandler } from "../handlers/form.handler";
import { postFormHandler } from "../handlers/form.handler";

const formRouter: Router = Router();

formRouter.get("/", getFormHandler);
formRouter.post("/", postFormHandler);

export default formRouter;
