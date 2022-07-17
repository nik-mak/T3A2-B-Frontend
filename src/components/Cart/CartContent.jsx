import React from "react";
import UserContext from "../../contexts/user";
import CartCard from "../CartCard";

const CartContent = () => {
  const { cart } = React.useContext(UserContext);
  const [cartItems] = cart;

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
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CartContent;
