import { Request, Response } from "express";

export const getHomeHandler = (req: Request, res: Response) => {
  res.send("Servidor corriendo en handler de home.");
};
