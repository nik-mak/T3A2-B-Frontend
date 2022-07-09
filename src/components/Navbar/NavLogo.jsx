import React from "react";
import LogoIcon from "../Icons/LogoIcon";

/**
 * Desperate Housewares navigation logo component
 * 
 * @returns {HTML} a nav logo component
 */
function NavLogo() {
  return (
    <div>
      <a href="/" className="flex items-center">
        <LogoIcon className={"ml-1 sm:m-2 block w-16 sm:w-20"} />
        <h1 className="font-oswald text-2xl hidden sm:inline-block">
          Desperate Housewares
        </h1>
      </a>
    </div>
  );
}

export default NavLogo;
