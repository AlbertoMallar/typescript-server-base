import { Router } from "express";
import { getHomeHandler } from "../handlers/home.handler";

const homeRouter: Router = Router();

homeRouter.get("/", getHomeHandler);

export default homeRouter;
