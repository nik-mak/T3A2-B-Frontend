import React from "react";

/**
 * Nav Item component that is used to render nav items.
 *
 * @param {Function} onClick callback function used to handle the nav items onClick event
 * @param {String} itemName a string containing the name for the nav item
 *
 * @returns {HTML} a nav item component
 */
function NavItem({ onClick, itemName, children }) {
  return (
    <li className="flex items-center justify-center hover:text-cyan-cobalt-blue">
      <button onClick={onClick} className="flex flex-col items-center">
        {children}
        <p className="font-oswald">{itemName}</p>
      </button>
    </li>
  );
}

export default NavItem;
