import React, { useContext } from "react";
import UserContext from "../../contexts/user";

/**
 * LoggedIn component is used to render children components if a user exists (is logged in).
 *
 * @param {HTML} children components to be rendered if authentication is successful
 * @return {HTML} children components or nothing depending on authentication success
 */
function LoggedIn({children }) {
    const user = useContext(UserContext)[0];

  return <>{user && (children)}</>;
}

export default LoggedIn;
