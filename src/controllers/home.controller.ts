import { AppError } from "../types/AppError";

export const getHomeController = async (): Promise<string> => {
  throw new AppError("Mensaje claro", 400);
};
