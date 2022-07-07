import React from "react";
import AccountIcon from "./Icons/AccountIcon";
import LogoIcon from "./Icons/LogoIcon";

/**
 * Navbar component that is fixed to the top of the screen and renders the nav items for the user.
 */
function Navbar() {
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
      <div className="flex items-center justify-center pr-11">
        <a href="/" className="flex flex-col items-center">
          <AccountIcon className={""} />
          <p className="font-oswald">Sign In</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
