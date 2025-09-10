import { NextFunction, Request, Response } from "express";
import {
  getFormController,
  postFormController,
} from "../controllers/form.controller";

export const getFormHandler = async (req: Request, res: Response) => {
  try {
    const response = await getFormController();
    res.send(response);
  } catch (error) {
    console.error("Error in getFormHandler:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const postFormHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let formData = req.body;
    const response = await postFormController(formData);
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    next(error);
  }
};
