import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../screens/register/Register";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
