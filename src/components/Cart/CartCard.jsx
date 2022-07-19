import React, { useContext } from "react";
import DollarSignIcon from "../Icons/DollarSignIcon";
import CloseIcon from "@mui/icons-material/Close";
import api from "../../helpers/api";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";

/**
 * CartCard is a component that handles rendering a listing card styled like a cart item
 *
 * @return {HTML} a styled card
 */
function CartCard({ name, image, price, size, id, removable }) {
  const setCartItems = useContext(CartContext)[1];
  const cartTotal = useContext(CartTotalContext)[0];
  const setCartTotal = useContext(CartTotalContext)[1];

  const removeItem = () => {
    api
      .delete(`cart/${id}`)
      .then(() => {
        setCartItems((prevState) => {
          setCartItems(prevState.filter((item) => item._id !== id));
        });
      })
      .catch(() => {}) // !!!!!!!!
      .finally(() => setCartTotal(cartTotal - price));
  };

  return (
    <div className="flex min-w-[300px] flex-row shadow-custom2">
      <div className="mr-2 h-24 w-20 flex-shrink-0 overflow-hidden border border-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col justify-between font-oswald">
        <div className="flex justify-between text-xl">
          <p>{name}</p>
          {removable ? <button
            onClick={removeItem}
            className="mr-2 flex items-center hover:rounded-full hover:bg-ue-red hover:text-white"
          >
            <CloseIcon />
          </button> : ""}
        </div>
        <div className="flex justify-between">
          <p className="text-lg">Size: {size}</p>
          <div className="flex flex-col-reverse pb-4 pr-8">
            <div className="flex justify-end">
              <DollarSignIcon />
              <p className="text-4xl">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
