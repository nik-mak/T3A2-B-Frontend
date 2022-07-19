import React, { useContext } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import api from "../../helpers/api";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";
import useAlerts from "../../hooks/useAlerts";
import { useNavigate } from "react-router-dom";

/**
 * Cart Footer component that renders the total amount of all items in the cart, purchase button, and empty cart button.
 *
 * @returns {HTML} collection of some of the cart buttons and total price.
 */
const CartFooter = () => {
  const { addAlert } = useAlerts();
  const cartItems = useContext(CartContext)[0];
  const setCartItems = useContext(CartContext)[1];
  const cartTotal = useContext(CartTotalContext)[0];
  const setCartTotal = useContext(CartTotalContext)[1];

  const navigate = useNavigate();
  const navigateToBag = () => {
    navigate("/bag");
  };

  const emptyCart = () => {
    api
      .delete("/cart")
      .then(() => {
        setCartItems([]);
      })
      .then(() => setCartTotal(0))
      .catch((error) => {
        addAlert({
          severity: "warning",
          message: "Failed to empty the cart because of: " + (error.response.data || error.message),
        })
      })
      .finally(navigateToBag())
  };

  // Checkout function to move items from cart to orders
  // Marks items as sold
  const order = () => {

    if (cartItems.length > 0) {
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
    } else {
      addAlert({
        severity: "warning",
        message: "Cart is empty"
      })
    }
  };

  return (
    <div className="flex w-full flex-col justify-end ml-1 z-[99]">
      <div className="mb-2 mt-4 flex justify-center" onClick={emptyCart}>
        <button className="flex h-[49px] w-[122px] flex-row items-center rounded-full border-2 border-ue-red text-[20px] text-ue-red hover:bg-ue-red hover:text-white">
          <div className="flex justify-center pl-1 pt-px">
            <DeleteOutlineIcon />
          </div>
          Remove All
        </button>
      </div>
      <div>
        <hr></hr>
        <div className="flex justify-center">
          <p className="text-xl pb-2">Order Summary</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="pl-4">
            <p className="text-xl">Total</p>
            <div className="flex flex-row items-center">
              <AttachMoneyIcon />
              <p className="text-2xl">{cartTotal}</p>
            </div>
          </div>
          <button
            onClick={() => {
              order()
              navigateToBag()
            }}
            className="mr-[10px] h-[49px] w-[122px] rounded-full bg-checkout-blue text-[20px] pl-3 text-white hover:bg-cyan-cobalt-blue"
          >
            Purchase
            <NavigateNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
