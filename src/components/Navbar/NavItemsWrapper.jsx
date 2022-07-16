import React, { useContext } from "react";
import SettingsIcon from "../Icons/SettingsIcon";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";
import NavItem from "./NavItem";
import AccountIcon from "../Icons/AccountIcon";
import LoginIcon from "../Icons/LoginIcon";
import BagIcon from "../Icons/BagIcon";
import CartIcon from "../Icons/CartIcon";
import { useState } from "react";
import useModalsReducer from "../../hooks/reducers/ModalsReducer";
import LogoutIcon from "../Icons/LogoutIcon";
import api from "../../helpers/api";
import UserContext from "../../contexts/user";
import useAlerts from "../../hooks/useAlerts";
import HasRole from "../Auth/HasRole";
import LoggedIn from "../Auth/LoggedIn";
import NotLoggedIn from "../Auth/NotLoggedIn";
import AddListingIcon from "../Icons/AddListingIcon";
import AddListingModal from "../modals/AddListingModal";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

// Defines the modals used in the Navbar
const initialState = { signUp: false, login: false, addListing: false };

/**
 * Nav Item wrapper that contains nav items and relevant modals
 *
 * @returns {Object} wrapped nav items and relevant modals
 */
function NavItemsWrapper() {
  //  defines the states of every modal and a dispatch method
  const [modalStates, setModalStates] = useModalsReducer(initialState);
  const [settingsState, setSettingsState] = useState(false);
  // defines the states of the user and a dispatch method
  const setUser = useContext(UserContext)[1];
  // defines the alerts dispatch method
  const { addAlert } = useAlerts();
  
  const navigate = useNavigate();

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
      .catch(() => {
        addAlert({
          severity: "warning",
          message: "An unexpected error occurred",
        });
      });
  }

  return (
    <div className="flex space-x-5 pr-5 sm:space-x-10 sm:pr-10">
      {/* Bag Nav Item for Customers */}
      <HasRole roles={["customer"]}>
        <NavItem onClick={navigateToBag} itemName="Bag">
          <BagIcon />
        </NavItem>
      </HasRole>
      {/* Create Listing Nav Item */}
      <HasRole roles={["staff", "admin"]}></HasRole>
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
      {/* Settings Menu */}
      <HasRole roles={["staff", "admin"]}>
        <div className="relative flex">
          <NavItem
            itemName={settingsState ? "Settings ⇣" : "Settings ⇡"}
            onClick={() => setSettingsState(!settingsState)}
          >
            <SettingsIcon />
          </NavItem>
          {settingsState ? (
            ""
          ) : (
            <Paper className={"absolute top-[80px] sm:top-[97px]"}>
              <MenuList dense>
                <MenuItem onClick={navigateToHome}>
                  <ListItemText>Manage Listings</ListItemText>
                </MenuItem>
                <HasRole roles={["admin"]}>
                  <Divider />
                  <MenuItem onClick={navigateToAdmin}>
                    <ListItemText>Admin Dashboard</ListItemText>
                  </MenuItem>
                </HasRole>
                <Divider />
                <MenuItem onClick={navigateToBag}>
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
          itemName="+Listing"
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
        <NavItem itemName="Cart">
          <CartIcon />
        </NavItem>
      </HasRole>
      {/* Modals */}
      <NotLoggedIn>
        <SignUpModal
          open={modalStates.signUp}
          onClose={() =>
            setModalStates({ modalName: "signUp", action: "close" })
          }
        />
        <LoginModal
          open={modalStates.login}
          onClose={() =>
            setModalStates({ modalName: "login", action: "close" })
          }
        />
      </NotLoggedIn>
      <AddListingModal
        open={modalStates.addListing}
        onClose={() =>
          setModalStates({ modalName: "addListing", action: "close" })
        }
      />
    </div>
  );
}

export default NavItemsWrapper;
