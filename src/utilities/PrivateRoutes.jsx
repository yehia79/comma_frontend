import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoggedInUserContext } from "../App";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;