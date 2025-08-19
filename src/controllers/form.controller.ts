import { FormData } from "../types/form.types";

export const getFormController = async (): Promise<string> => {
  return "estoy en el controller get de form";
};

export const postFormController = async (data: FormData): Promise<string> => {
  console.log("Datos recibidos:", data);
  return `Formulario recibido de ${data.name} con opción ${data.option}`;
};
