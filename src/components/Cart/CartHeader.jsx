import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShowCartContext from "../../contexts/showCart";
import api from "../../helpers/api";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";
import useAlerts from "../../hooks/useAlerts";
import { useNavigate } from "react-router-dom";

/**
 * Cart Header component that renders the close cart button, cart title, and purchase button.
 *
 * @returns {HTML} contains the close cart button, cart title, and purchase button.
 */
const CartHeader = () => {
  const { addAlert } = useAlerts();
  const [cartItems, setCartItems] = useContext(CartContext);
  const setShowCart = useContext(ShowCartContext)[1];
  const setCartTotal = useContext(CartTotalContext)[1];

  const navigate = useNavigate();
  const navigateToBag = () => {
    navigate("/bag");
  };

  // Checkout function to move items from cart to orders
  // Marks items as sold
  const order = () => {
    if (cartItems.length > 0) {
      api
        .post("/order/add")
        .then(() => setCartItems([]))
        .then(() => setCartTotal(0))
        .catch((error) => {
          addAlert({
            severity: "warning",
            message:
              "Failed to place order because of: " +
              (error.response.data || error.message),
          });
        })
        .finally(navigateToBag());
    } else {
      addAlert({
        severity: "warning",
        message: "Failed to place order because cart is empty.",
      });
    }
  };

  return (
    <div className="flex w-full flex-row items-center justify-between border-b-2 py-4">
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
        onClick={() => {
          order();
        }}
        className="mr-[10px] h-[49px] w-[122px] rounded-full bg-checkout-blue pl-3 text-[20px] text-white hover:bg-cyan-cobalt-blue"
      >
        Purchase
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CartHeader;
