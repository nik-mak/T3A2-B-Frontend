import React from "react";

const CartItem = ({ item }) => {
  return (
    <ul className="mx-2 my-1 h-24 w-[305px] border shadow-custom">
      <li>{item.name}</li>
      <li>{item.size}</li>
      <li>{item.price}</li>
    </ul>
  );
};

export default CartItem;
