import React, { useContext } from "react";
import UserContext from "../../contexts/user";

/**
 * HasRole component is used to render children components if a user is logged in and has a role included in the roles param
 *
 * @param {Array} roles an array of the roles permitted 
 * @param {HTML} children components to be rendered if authorization is successful
 * @return {HTML} children components or nothing depending on authorization success
 */
function HasRole({ roles, children }) {
  const user = useContext(UserContext)[0];

  return <>{user && roles.includes(user.role) && (children)}</>;
}

export default HasRole;
