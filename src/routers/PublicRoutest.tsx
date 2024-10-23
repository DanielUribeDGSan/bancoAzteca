import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../screens/register/Register";
import { Home } from "../screens/home/Home";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
