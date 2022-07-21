import React, { useContext, useEffect } from "react";
import UserContext from "../../contexts/user";
import useAlerts from "../../hooks/useAlerts";
import { Navigate } from "react-router-dom";

/**
 * NotLoggedIn component is used to render children components if a user does not exist (is not logged in).
 *
 * @param {HTML} children components to be rendered if authentication is successful
 * @param redirect_to the route to redirect to leave empty if '/'
 * @param error_message the message to be displayed as an alert, leave empty if "please login"
 * @param roles the roles the user must have to render the children 
 * 
 * @return {HTML} children components or nothing depending on authentication success
 */
function PrivateRoute({
  children,
  redirect_to = "/",
  error_message = "Please Login",
  roles,
}) {
  // Defines the current logged in user
  const user = useContext(UserContext)[0];
  // Defines the addAlerts function to be used in the use effect
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
    }    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user && roles.includes(user.role) ? (
    children
  ) : (
    <Navigate to={redirect_to} />
  );
}

export default PrivateRoute;
