import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShowCartContext from "../../contexts/showCart";
import api from "../../helpers/api";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";
import useAlerts from "../../hooks/useAlerts";

/**
 * Cart Header component that renders the close cart button, cart title, and purchase button.
 *
 * @returns {HTML} contains the close cart button, cart title, and purchase button.
 */
const CartHeader = () => {
  const { addAlert } = useAlerts();
  const setShowCart = useContext(ShowCartContext)[1];
  const setCartItems = useContext(CartContext)[1];
  const setCartTotal = useContext(CartTotalContext)[1];

  // Checkout function to move items from cart to orders
  // Marks items as sold
  const order = () => {
    api
      .post("/order/add")
      .then(() => setCartItems([]))
      .then(() => setCartTotal(0))
      .catch(() => {
        addAlert({
          severity: "warning",
          message: "An unexpected error occurred",
        });
      });
  };

  return (
    <div className="flex w-full flex-row items-center justify-between border-b-2 py-4 shadow-custom2">
      <div className="flex flex-row items-center">
        <button
          className="ml-3 flex flex-col items-center border-r-2 pr-2.5 hover:text-ue-red"
          onClick={() => setShowCart(false)}
        >
          <CloseIcon sx={{ fontSize: 40 }} />
          Close
        </button>
        <h1 className="pl-3 text-center text-4xl">Cart</h1>
      </div>
      <button
        onClick={order}
        className="mr-[10px] h-[49px] w-[122px] rounded-full bg-checkout-blue text-[20px] text-white hover:bg-cyan-cobalt-blue"
      >
        Purchase
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CartHeader;
