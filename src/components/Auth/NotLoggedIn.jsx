import React, { useContext } from 'react'
import UserContext from '../../contexts/user';

function NotLoggedIn({children}) {
    const user = useContext(UserContext)[0];

  return <>{!user && (children)}</>;
}

export default NotLoggedIn;
