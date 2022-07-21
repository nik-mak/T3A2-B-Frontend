import React, { useEffect, useState } from "react";
import AlertsContext from "../contexts/alert";
import CartContext from "../contexts/cart";
import CartTotalContext from "../contexts/total";
import ModalsContext from "../contexts/modals";
import SelectedListingContext from "../contexts/selectedListing";
import UserContext from "../contexts/user";
import api from "../helpers/api";
import useModalsReducer from "../hooks/reducers/ModalsReducer";
import ShowCartContext from "../contexts/showCart";

//
/**
 * GlobalContext is a wrapper to combine all contexts into one component
 *
 * @param {HTML} children child components
 * 
 * @return {HTML} children components wrapped by all contexts defined in GlobalContexts
 */
function GlobalContexts({ children }) {
  // Sets the initial user state for user context
  const [user, setUser] = useState();
  // Sets the initial alert state for alert context
  const [alerts, setAlerts] = useState([]);
  // Sets the initial state for selected listing used to handle updating a listing via the selectedListing context
  const [selectedListing, setSelectedListing] = useState({});
   // Sets the initial state for modalStates used to handle opening and closing the modals via the modals context and modals reducer
  const [modalStates, setModalStates] = useModalsReducer({
    signUp: false,
    login: false,
    addListing: false,
    manageListing: false,
  });
  // Defines the loading state of the page
  const [loading, setLoading] = useState(true);
  // Defines the cartItems state of the page
  const [cartItems, setCartItems] = useState();
  // Defines the cartTotal state of the page
  const [cartTotal, setCartTotal] = useState(0);
  // Defines the cart menu open and close state
  const [showCart, setShowCart] = useState(false);


  // Use effect that is enabled on refresh to get the users login details and automatically log them in if they exist
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

  // Use effect that is used to handle setting cart items and the total price
  useEffect(() => {
    if (user && (user.role === "customer")) {
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
    }
  }, [user]);

  // Used to render loading while useEffects is fetching the user information
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
