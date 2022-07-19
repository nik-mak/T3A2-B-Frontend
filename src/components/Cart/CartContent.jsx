import React, { useContext } from "react";
import CartContext from "../../contexts/cart";
import CartCard from "./CartCard";

/**
 * Cart Content component used to render all the items that are present in the users cart.
 *
 * @returns {HTML} container for the cart cards which list the items in the users cart.
 */
const CartContent = () => {
  const cartItems = useContext(CartContext)[0];

  return (
    <>
      {cartItems ? (
        <div className="h-[calc(100vh-355px)] overflow-auto pt-2 md:h-[calc(100vh-371px)]">
          {cartItems.map((item) => {
            return (
              <div key={item._id} className="ml-2 mb-2 font-light">
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
