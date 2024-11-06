/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useDanone } from "../../../hooks/useDanone";
import { useRef, useState } from "react";
import { ProgressButton } from "../progress/ProgressButton";
import { initialValues, loginSchema } from "./loginFormConfig";
import {
  createTheme,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { FormValuesLogin } from "../../../interfaces/registerForm";
import Swal from "sweetalert2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006341",
    },
    secondary: {
      main: "#006341",
    },
  },
});

export const LoginForm = () => {
  const { login, recuperarClave } = useDanone();
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");

  const btnClose = useRef(null);
  const [loader, setLoader] = useState(false);
  const [loaderRecuperar, setLoaderRecuperar] = useState(false);
  const [emailRecuperar, setEmailRecuperar] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailRecuperar(e.target.value);
  };

  const handleClickRecuperar = async () => {
    if (emailRecuperar == "") {
      Swal.fire({
        title: "Email vacío",
        text: "Debes ingresar tu email",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return null;
    }
    setLoaderRecuperar(true);
    const rep = await recuperarClave({ email: emailRecuperar });
    if (rep) {
      setEmailRecuperar("");
      if (btnClose.current) (btnClose.current as HTMLElement | null)?.click();
    }
    setLoaderRecuperar(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoader(true);

      const user: FormValuesLogin = {
        email: values.email,
        clave: values.clave,
      };
      const { resp }: any = await login(user);

      if (resp) resetForm();
      setLoader(false);
    },
  });

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    formik;

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className="form-register mt-20 mb-20">
        <div className="mb-30">
          <div className="row mx-0 mb-15 p-0 w-100">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mt-10">
              <TextField
                className="w-100"
                label="Clave"
                variant="outlined"
                value={values.clave}
                onChange={handleChange}
                onBlur={handleBlur}
                id="clave"
                name="clave"
                type="password"
                error={touched.clave && Boolean(errors.clave)}
                helperText={touched.clave && errors.clave}
              />
            </div>

            <div
              className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-flex align-items-end justify-content-lg-start justify-content-center ${
                movilIpadaScreen ? "mt-30" : "mt-10"
              } `}
            >
              {loader ? (
                <ProgressButton />
              ) : (
                <>
                  <button
                    className="btn-secondary-lg fw-bold"
                    type="submit"
                    aria-label="Iniciar sesión"
                  >
                    ENTRAR
                  </button>
                </>
              )}
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 col-md-6 mt-10">
              <span className="text-black mr-2 d-inline-flex gap-1">
                Recupera tu clave
                <button
                  type="button"
                  className="ml-2 d-inline-flex"
                  style={{ color: "#0000ff" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  haciendo clic aquí
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black" id="exampleModalLabel">
                Recuperar clave
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={btnClose}
              ></button>
            </div>
            <div className="modal-body">
              <TextField
                className="w-100"
                label="Email"
                variant="outlined"
                value={emailRecuperar}
                onChange={handleChangeEmail}
                id="emailRecuperar"
                name="emailRecuperar"
                type="email"
              />
              <div className="w-100">
                {loaderRecuperar ? (
                  <div className="mt-10">
                    <ProgressButton />
                  </div>
                ) : (
                  <>
                    <button
                      className="btn-secondary-md fw-bold text-white mt-20"
                      type="button"
                      aria-label="Iniciar sesión"
                      onClick={handleClickRecuperar}
                    >
                      Recuperar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
