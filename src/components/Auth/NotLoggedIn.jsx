import React, { useContext } from 'react'
import UserContext from '../../contexts/user';

/**
 * NotLoggedIn component is used to render children components if a user does not exist (is not logged in).
 *
 * @param {HTML} children components to be rendered if authentication is successful
 * @return {HTML} children components or nothing depending on authentication success
 */
function NotLoggedIn({children}) {
    const user = useContext(UserContext)[0];

  return <>{!user && (children)}</>;
}

export default NotLoggedIn;
