import React from "react";
import NavItemsWrapper from "./NavItemsWrapper";
import NavLogo from "./NavLogo";

/**
 * Navbar component that is fixed to the top of the screen and renders the nav items for the user.
 *
 * @return {HTML} a navbar component
 */
function Navbar() {

  return (
    <nav className="sticky top-0 flex place-content-between bg-white drop-shadow-lg z-[99]">
      <NavLogo/>
      <NavItemsWrapper/>
    </nav>
  );
}

export default Navbar;
