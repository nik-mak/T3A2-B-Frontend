import React from "react";
import SettingsIcon from "../Icons/SettingsIcon";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";
import NavItem from "./NavItem";
import AccountIcon from "../Icons/AccountIcon";
import LoginIcon from "../Icons/LoginIcon";
import { useState } from "react";
import useModalsReducer from "../../hooks/reducers/ModalsReducer";

// Defines the modals used in the Navbar
const initialState = { signUp: false, login: false };

/**
 * Nav Item wrapper that contains nav items and relevant modals
 * 
 * @returns {HTML} wrapped nav items and relevant modals
 */
function NavItemsWrapper() {
  const [modalStates, setModalStates] = useModalsReducer(initialState);
  const [settingsState, setSettingsState] = useState(false);
  return (
    <div className="flex space-x-5 pr-5 sm:space-x-10 sm:pr-10">
      {/* Sign Up Nav item */}
      <NavItem
        onClick={() => setModalStates({ modalName: "signUp", action: "open" })}
        itemName="Sign Up"
      >
        <AccountIcon/>
      </NavItem>
      {/* TODO: Check if user is logged in and render different login or sign out onclick events !!!! */}
      <NavItem
          onClick={() => setModalStates({ modalName: "login", action: "open" })}
          itemName="Login"
        >
          <LoginIcon/>
        </NavItem>
      {/* TODO: Finish implementing the settings menu nav item*/}
      <div className="relative flex">
        <NavItem itemName="Settings" onClick={() => setSettingsState(!settingsState)}>
          <SettingsIcon />
        </NavItem>
        <ul
          className={`absolute top-[100px] bg-white ${settingsState ? "" : "hidden"}`}
        >
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
      </div>
      {/* Modals */}
      <SignUpModal
        open={modalStates.signUp}
        onClose={() => setModalStates({ modalName: "signUp", action: "close" })}
      />
      <LoginModal
        open={modalStates.login}
        onClose={() => setModalStates({ modalName: "login", action: "close" })}
      />
    </div>
  );
}

export default NavItemsWrapper;
