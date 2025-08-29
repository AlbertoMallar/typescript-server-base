import { FormData } from "../types/form.types";

export const formHelper = async (data: FormData): Promise<void> => {
  console.log("Datos recibidos del formulario:", data);
};
