import { Router } from "express";
import homeRouter from "./home.routes";
import formRouter from "./form.routes";

const router = Router();

router.use("/", homeRouter);
router.use("/form", formRouter);

export default router;
