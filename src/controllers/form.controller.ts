import { FormData } from "../types/form.types";
import { formHelper } from "../helpers/form.helper";
import { AppError } from "../types/AppError";

// GET form
export const getFormController = async (): Promise<string> => {
  return "estoy en el controller get de form";
};

//POST form
export const postFormController = async (data: FormData): Promise<string> => {
  try {
    if (!data.name || !data.email || !data.option) {
      throw new AppError("Faltan campos obligatorios", 400);
    }
    let result = await formHelper(data);
    return "helper retornado";
  } catch (error) {
    throw error instanceof AppError
      ? error
      : new AppError("Error al guardar el formulario", 500);
  }
};
