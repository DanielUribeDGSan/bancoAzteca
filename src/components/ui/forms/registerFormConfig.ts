import * as Yup from "yup";
import { FormValuesRegister } from "../../../interfaces/registerForm";

export const initialValues: FormValuesRegister = {
  fullName: "",
  company: "",
  post: "",
  email: "",
  phone: "",
};

export const loginSchema = Yup.object({
  fullName: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el nombre completo"
    )
    .required("El nombre completo es obligatorio")
    .label("Nombre completo"),
  company: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en la institución o empresa"
    )
    .required("La institución o empresa es obligatoria")
    .label("⁠Institución o empresa"),
  post: Yup.string()
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
      "Solo se permiten letras en el nombre"
    )
    .required("El nombre es obligatorio")
    .label("Nombre"),
  email: Yup.string()
    .required("El email es obligatorio")
    .email("Debes ingresar un email Válido")
    .label("Email"),
});
