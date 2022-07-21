import React, { useContext } from "react";
import SettingsIcon from "../Icons/SettingsIcon";
import NavItem from "./NavItem";
import AccountIcon from "../Icons/AccountIcon";
import LoginIcon from "../Icons/LoginIcon";
import BagIcon from "../Icons/BagIcon";
import CartIcon from "../Icons/CartIcon";
import { useState } from "react";
import LogoutIcon from "../Icons/LogoutIcon";
import api from "../../helpers/api";
import UserContext from "../../contexts/user";
import useAlerts from "../../hooks/useAlerts";
import HasRole from "../auth/HasRole";
import LoggedIn from "../auth/LoggedIn";
import NotLoggedIn from "../auth/NotLoggedIn";
import AddListingIcon from "../Icons/AddListingIcon";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ModalsContext from "../../contexts/modals";
import ShowCartContext from "../../contexts/showCart";
import Cart from "../cart/Cart";

/**
 * Nav Item wrapper that contains nav items and relevant modals
 *
 * @returns {Object} wrapped nav items and relevant modals
 */
function NavItemsWrapper() {
  // defines modalStates and setModalStates using context provider
  const setModalStates = useContext(ModalsContext)[1];
  // defines the open close state for the settings drop down
  const [settingsState, setSettingsState] = useState(false);
  // defines the states of the user and a dispatch method
  const setUser = useContext(UserContext)[1];
  // defines the alerts dispatch method
  const { addAlert } = useAlerts();

  // defines cart states using context provider
  const [showCart, setShowCart] = useContext(ShowCartContext);
  const setCartItems = useContext(CartContext)[1];
  const setCartTotal = useContext(CartTotalContext)[1];

  const navigate = useNavigate();

  

  // const showCart = useContext(ShowCartContext)[0];
  // const setShowCart = useContext(ShowCartContext)[1];

  // navigate to bag handler
  const navigateToBag = () => {
    navigate("/bag");
  };
  // navigate to home handler
  const navigateToHome = () => {
    navigate("/");
  };

  // navigate to admin handler
  const navigateToAdmin = () => {
    navigate("/admin");
  };

  // A function to handle the onclick logout action for the logout nav item.
  function handleLogout() {
    api
      .post("/auth/logout")
      .then((response) => {
        setUser(undefined);
        addAlert({ severity: "success", message: "Successfully Logged Out" });
      })
      .then(setCartItems([]))
      .then(setCartTotal(0))
      .catch(() => {
        addAlert({
          severity: "warning",
          message: "An unexpected error occurred",
        });
      });
  }

  function openCart() {
    setShowCart((current) => !current);
  }

  return (
    <ul className="flex space-x-5 pr-5 sm:space-x-10 sm:pr-10">
      {/* Bag Nav Item for Customers */}
      <HasRole roles={["customer"]}>
        <NavItem onClick={navigateToBag} itemName="Bag">
          <BagIcon />
        </NavItem>
      </HasRole>
      {/* Sign Up Nav item */}
      <NotLoggedIn>
        <NavItem
          onClick={() =>
            setModalStates({ modalName: "signUp", action: "open" })
          }
          itemName="Sign Up"
        >
          <AccountIcon />
        </NavItem>
        {/* Login Nav Item */}
        <NavItem
          onClick={() => setModalStates({ modalName: "login", action: "open" })}
          itemName="Login"
        >
          <LoginIcon />
        </NavItem>
      </NotLoggedIn>
      <HasRole roles={["staff", "admin"]}>
        {/* Settings Menu */}
        <div className="relative flex">
          <NavItem
            itemName={settingsState ? "Settings ⇣" : "Settings ⇡"}
            onClick={() => setSettingsState(!settingsState)}
          >
            <SettingsIcon />
          </NavItem>
          {!settingsState ? (
            ""
          ) : (
            <Paper className={"absolute top-[80px] sm:top-[97px]"}>
              <MenuList dense>
                <MenuItem
                  onClick={() => {
                    navigateToHome();
                    setSettingsState(!settingsState);
                  }}
                >
                  <ListItemText>Manage Listings</ListItemText>
                </MenuItem>
                <HasRole roles={["admin"]}>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      navigateToAdmin();
                      setSettingsState(!settingsState);
                    }}
                  >
                    <ListItemText>Admin Dashboard</ListItemText>
                  </MenuItem>
                </HasRole>
                <Divider />
                <MenuItem
                  onClick={() => {
                    navigateToBag();
                    setSettingsState(!settingsState);
                  }}
                >
                  <ListItemText>Listings on hold</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          )}
        </div>
        {/* Create Listing Nav Item */}
        <NavItem
          onClick={() =>
            setModalStates({ modalName: "addListing", action: "open" })
          }
          itemName="+ Listing"
        >
          <AddListingIcon />
        </NavItem>
      </HasRole>
      {/* Logout Nav Item */}
      <LoggedIn>
        <NavItem onClick={() => handleLogout()} itemName="Logout">
          <LogoutIcon />
        </NavItem>
      </LoggedIn>
      <HasRole roles={["customer"]}>
        <NavItem onClick={openCart} itemName="Cart">
          <CartIcon />
        </NavItem>
        {showCart && <Cart />}
      </HasRole>
    </ul>
  );
}

export default NavItemsWrapper;
