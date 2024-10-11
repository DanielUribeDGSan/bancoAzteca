import { Navigate, Route, Routes } from "react-router-dom";
import { Live } from "../screens/live/Live";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/en-vivo" element={<Live />} />
      <Route path="*" element={<Navigate to="/en-vivo" replace />} />
    </Routes>
  );
};
