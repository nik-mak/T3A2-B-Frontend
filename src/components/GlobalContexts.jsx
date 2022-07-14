import React, { useEffect, useState } from "react";
import AlertsContext from "../contexts/alert";
import UserContext from "../contexts/user";
import api from "../helpers/api";

//
/**
 * GlobalContext is a wrapper to combine all contexts into one component
 *
 * @param {HTML} children child components
 */
function GlobalContexts({ children }) {
  const [user, setUser] = useState();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/user/loggedin")
    .then(({ data }) => {
      setUser(data);
    })
    .catch(() => {})
    .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading){
    return <>Loading...</>
  }

    
  return (
    <UserContext.Provider value={[user, setUser]}>
      <AlertsContext.Provider value={[alerts, setAlerts]}>
        {children}
      </AlertsContext.Provider>
    </UserContext.Provider>
  );
}

export default GlobalContexts;
