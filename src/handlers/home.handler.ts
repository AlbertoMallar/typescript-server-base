import { Request, Response, NextFunction } from "express";
import { getHomeController } from "../controllers/home.controller";

export const getHomeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await getHomeController();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
