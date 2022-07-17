import React, { useEffect, useState } from "react";
import AlertsContext from "../contexts/alert";
import ModalsContext from "../contexts/modals";
import SelectedListingContext from "../contexts/selecteListing";
import UserContext from "../contexts/user";
import api from "../helpers/api";
import useModalsReducer from "../hooks/reducers/ModalsReducer";

//
/**
 * GlobalContext is a wrapper to combine all contexts into one component
 *
 * @param {HTML} children child components
 */
function GlobalContexts({ children }) {
  const [user, setUser] = useState();
  const [alerts, setAlerts] = useState([]);
  const [selectedListing, setSelectedListing] = useState({});
  const [modalStates, setModalStates] = useModalsReducer({
    signUp: false,
    login: false,
    addListing: false,
    manageListing: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/user/loggedin")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <AlertsContext.Provider value={[alerts, setAlerts]}>
        <ModalsContext.Provider value={[modalStates, setModalStates]}>
          <SelectedListingContext.Provider value={[selectedListing, setSelectedListing]}>
            {children}
          </SelectedListingContext.Provider>
        </ModalsContext.Provider>
      </AlertsContext.Provider>
    </UserContext.Provider>
  );
}

export default GlobalContexts;
