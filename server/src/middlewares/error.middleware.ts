import { Request, Response, NextFunction } from "express";
import { AppError } from "../types/AppError";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error capturado por middleware:", err);

  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message =
    err instanceof AppError ? err.message : "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
};
