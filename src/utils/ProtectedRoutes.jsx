import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoutes() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/auth/log-in" replace />;
}

export default ProtectedRoutes;
