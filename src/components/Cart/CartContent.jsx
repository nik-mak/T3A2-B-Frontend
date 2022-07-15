import React from "react";
import CartCard from "../CartCard";

const CartContent = ({ cartItems }) => {
  return (
    <div className="max-h-[calc(100vh-390px)] overflow-auto pt-2">
      {cartItems.map((item) => {
        return (
          <div className="ml-2 mb-2 font-light">
            <CartCard
              name={item.name}
              image={item.image}
              price={item.price}
              size={item.size}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
