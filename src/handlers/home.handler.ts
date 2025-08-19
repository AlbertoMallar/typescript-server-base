import { Request, Response } from "express";
import { getHomeController } from "../controllers/home.controller";

export const getHomeHandler = async (req: Request, res: Response) => {
  try {
    const response = await getHomeController();
    res.send(response);
  } catch (error) {
    console.error("Error in getHomeHandler:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
