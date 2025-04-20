import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userToken = localStorage.getItem("user");

  if (!userToken) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
