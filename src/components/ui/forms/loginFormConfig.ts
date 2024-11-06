import * as Yup from "yup";
import { FormValuesLogin } from "../../../interfaces/registerForm";

export const initialValues: FormValuesLogin = {
  email: "",
  clave: "",
};

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Debes ingresar un email válido")
    .label("Email"),
  clave: Yup.string().required("La clave es obligatoria").label("Clave"),
});
