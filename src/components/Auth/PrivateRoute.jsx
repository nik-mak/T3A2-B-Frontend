import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/user";
import useAlerts from "../../hooks/useAlerts";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({
  children,
  redirect_to = "/",
  error_message = "Please Login",
  roles,
}) {
  const user = useContext(UserContext)[0];
  const { addAlert } = useAlerts();

  useEffect(() => {
    if (!user) {
      addAlert({
        severity: "info",
        message: error_message,
      });
    } else if (!roles.includes(user.role)) {
      addAlert({
        severity: "error",
        message: "401 Unauthorized Access",
      });
    }
  }, []);

  return user && roles.includes(user.role) ? (
    children
  ) : (
    <Navigate to={redirect_to} />
  );
}

export default PrivateRoute;
