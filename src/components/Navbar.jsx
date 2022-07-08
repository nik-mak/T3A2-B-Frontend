import React from "react";
import { useState } from "react";
import useModalsReducer from "../hooks/reducers/ModalsReducer";
import AccountIcon from "./Icons/AccountIcon";
import LoginIcon from "./Icons/LoginIcon";
import LogoIcon from "./Icons/LogoIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import LoginModal from "./modals/LoginModal";
import SignUpModal from "./modals/SignUpModal";
import NavItem from "./NavItem";

const initialState = { signUp: false, login: false };

/**
 * Navbar component that is fixed to the top of the screen and renders the nav items for the user.
 *
 * @return {HTML} a navbar component
 */
function Navbar() {
  const [modalStates, setModalStates] = useModalsReducer(initialState);
  const [state, setState] = useState(false);

  return (
    <nav className="sticky top-0 flex place-content-between bg-white drop-shadow-lg">
      {/* Desperate housewares logo with redirect to home */}
      <div>
        <a href="/" className="flex">
          <LogoIcon className={"m-2 block"} />
          <h1 className="flex items-center font-oswald text-2xl">
            Desperate Housewares
          </h1>
        </a>
      </div>
      <div className="flex">
        {/* Sign Up Nav item */}
        <NavItem
          onClick={() =>
            setModalStates({ modalName: "signUp", action: "open" })
          }
          itemName="Sign Up"
        >
          <AccountIcon className={""} />
        </NavItem>
        {/* TODO: Finish implementing the settings menu nav item*/}
        <div className="relative flex">
          <NavItem itemName="Settings" onClick={() => setState(!state)}>
            <SettingsIcon/>
          </NavItem>
          <ul
            className={`absolute top-[100px] bg-white ${state ? "" : "hidden"}`}
          >
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </div>
        {/* TODO: Implement the sign in modal */}
        {/* TODO: Check if user is logged in and render different login or sign out onclick events !!!! */}
        <NavItem itemName="Login" onClick={() => setModalStates({ modalName: "login", action: "open" })}>
          <LoginIcon className={""} />
        </NavItem>
      </div>
      <SignUpModal
        open={modalStates.signUp}
        onClose={() => setModalStates({ modalName: "signUp", action: "close" })}
      />
      <LoginModal
        open={modalStates.login}
        onClose={() => setModalStates({ modalName: "login", action: "close" })}
      />
    </nav>
  );
}

export default Navbar;
