import { Request, Response } from "express";
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

export const postFormHandler = async (req: Request, res: Response) => {
  try {
    let formData = req.body;
    const response = await postFormController(formData);
    res.send(response);
  } catch (error) {
    console.error("Error in postFormHandler:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
