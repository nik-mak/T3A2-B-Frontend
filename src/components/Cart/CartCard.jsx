import React from "react";
import CartItem from "./CartItem";

const CartCard = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <CartItem item={item} />;
      })}
    </>
  );
};

export default CartCard;
