import React, { useContext } from "react";
import CartContext from "../../contexts/cart";
import CartCard from "../CartCard";

const CartContent = () => {
  const cartItems = useContext(CartContext)[0];

  return (
    <>
      {cartItems ? (
        <div className="h-[calc(100vh-355px)] overflow-auto pt-2 md:h-[calc(100vh-371px)]">
          {cartItems.map((item) => {
            return (
              <div key={item._id} className="ml-2 mb-2 font-light shadow-custom2">
                <CartCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  size={item.size}
                  id={item._id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default CartContent;
