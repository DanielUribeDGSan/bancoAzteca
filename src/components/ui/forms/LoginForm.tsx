/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useDanone } from "../../../hooks/useDanone";
import { useState } from "react";
import { ProgressButton } from "../progress/ProgressButton";
import { initialValues, loginSchema } from "./loginFormConfig";
import {
  createTheme,
  TextField,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { FormValuesLogin } from "../../../interfaces/registerForm";

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
  const { login } = useDanone();
  const movilIpadaScreen = useMediaQuery("(max-width:1000px)");
  const [loader, setLoader] = useState(false);

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
          </div>

          {/* <div className="row mx-0 mb-15 p-0">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <label htmlFor="sendingInstitution">
                INSTITUCIÓN DE PROCEDENCIA<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.sendingInstitution}
                onChange={handleChange}
                onBlur={handleBlur}
                id="sendingInstitution"
                name="sendingInstitution"
                type="text"
                placeholder="Institución"
              />
              {touched.sendingInstitution && (
                <ErrorMsg error={errors.sendingInstitution || ""} />
              )}
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ">
              <label htmlFor="nationality">
                NACIONALIDAD<span>*</span>
              </label>
              <select
                className="input-login"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                id="nationality"
                name="nationality"
              >
                {nationalityData.map(({ label, value }, i) => (
                  <option key={i} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {touched.nationality && (
                <ErrorMsg error={errors.nationality || ""} />
              )}
            </div>
          </div>

          <div className="row mx-0 mb-15 p-0">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="age">
                EDAD<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.age !== 0 ? values.age : ""}
                onChange={handleChange}
                onBlur={handleBlur}
                id="age"
                name="age"
                type="text"
                placeholder="Introduce tu edad"
              />
              {touched.age && <ErrorMsg error={errors.age || ""} />}
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="email">
                EMAIL<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                name="email"
                type="text"
                placeholder="Introduce tu mail"
              />
              {touched.email && <ErrorMsg error={errors.email || ""} />}
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 ">
              <label htmlFor="confirmEmail">
                CONFIRMA EMAIL<span>*</span>
              </label>
              <input
                className="input-login"
                value={values.confirmEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmEmail"
                name="confirmEmail"
                type="text"
                placeholder="Confirma tu mail"
              />
              {touched.confirmEmail && (
                <ErrorMsg error={errors.confirmEmail || ""} />
              )}
            </div>
          </div> */}
        </div>
      </form>
      {/* <Cookie
        lenguage="esp"
        setCheck={handleClickTerm}
        setOpen={setOpen}
        open={open}
      /> */}
    </ThemeProvider>
  );
};
