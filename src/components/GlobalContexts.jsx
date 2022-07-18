import React, { useEffect, useState } from "react";
import AlertsContext from "../contexts/alert";
import CartContext from "../contexts/cart";
import CartTotalContext from "../contexts/total";
import ModalsContext from "../contexts/modals";
import SelectedListingContext from "../contexts/selecteListing";
import UserContext from "../contexts/user";
import api from "../helpers/api";
import useModalsReducer from "../hooks/reducers/ModalsReducer";
import ShowCartContext from "../contexts/showCart";

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
  const [cartItems, setCartItems] = useState();
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

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
        setCartItems(data);
        return data;
      })
      .then((data) => {
        const prices = [];
        data.forEach((item) => prices.push(item.price));
        const total = prices.reduce((partialSum, a) => partialSum + a, 0);
        setCartTotal(total);
      })
      .catch();
  }, [user]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <CartTotalContext.Provider value={[cartTotal, setCartTotal]}>
          <ShowCartContext.Provider value={[showCart, setShowCart]}>
            <AlertsContext.Provider value={[alerts, setAlerts]}>
              <ModalsContext.Provider value={[modalStates, setModalStates]}>
                <SelectedListingContext.Provider
                  value={[selectedListing, setSelectedListing]}
                >
                  {children}
                </SelectedListingContext.Provider>
              </ModalsContext.Provider>
            </AlertsContext.Provider>
          </ShowCartContext.Provider>
        </CartTotalContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default GlobalContexts;
