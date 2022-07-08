import React from "react";
import { useState } from "react";
import useModalsReducer from "../hooks/reducers/ModalsReducer";
import AccountIcon from "./Icons/AccountIcon";
import LogoIcon from "./Icons/LogoIcon";
import SignUpModal from "./modals/SignUpModal";
import NavItem from "./NavItem";

const initialState = { signUp: false, signIn: false };

/**
 * Navbar component that is fixed to the top of the screen and renders the nav items for the user.
 *
 * @return {Nav} Navbar component
 */
function Navbar() {
  const [modalStates, setModalStates] = useModalsReducer(initialState);
  const [state, setState] = useState(false);

  return (
    <nav className="sticky top-0 bg-white drop-shadow-lg flex place-content-between">
      {/* Desperate housewares logo with redirect to home */}
      <div>
        <a href="/" className="flex">
          <LogoIcon className={"m-2 block"} />
          <h1 className="font-oswald text-2xl items-center flex">
            Desperate Housewares
          </h1>
        </a>
      </div>
      <div className="flex">
        <NavItem
          onClick={() =>
            setModalStates({ modalName: "signUp", action: "open" })
          }
          itemName="Sign Up"
        >
          <AccountIcon className={""} />
        </NavItem>
        {/* TODO: Implement the sign in modal */}
        {/* TODO: Finish implementing the settings menu nav item*/}
        <div className="flex relative">
          <NavItem itemName="Settings" onClick={() => setState(!state)}>
            <AccountIcon className={""} />
          </NavItem>
          <ul
            className={`absolute top-[100px] bg-white ${state ? "" : "hidden"}`}
          >
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </div>
      </div>
      <SignUpModal
        open={modalStates.signUp}
        onClose={() => setModalStates({ modalName: "signUp", action: "close" })}
      />
    </nav>
  );
}

export default Navbar;
