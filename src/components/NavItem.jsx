import React from "react";

/**
 * Nav Item component that is used to render nav items.
 */
function NavItem({onClick, children, itemName}) {
  return (
    <div className="flex items-center justify-center pr-11">
      <button onClick={onClick} className="flex flex-col items-center">
        {children}
        <p className="font-oswald">{itemName}</p>
      </button>
    </div>
  );
}

export default NavItem;
