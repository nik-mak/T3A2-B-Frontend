import React, { useEffect, useState } from "react";
import AlertsContext from "../contexts/alert";
import CartContext from "../contexts/cart";
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
  const [cartItems, setCartItems] = useState();

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

  useEffect(() => {
    api
      .get("/cart")
      .then(({ data }) => {
        console.dir(data);
        setCartItems(data);
      })
      .catch();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <AlertsContext.Provider value={[alerts, setAlerts]}>
          {children}
        </AlertsContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default GlobalContexts;
