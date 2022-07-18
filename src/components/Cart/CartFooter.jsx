import React, { useContext } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import api from "../../helpers/api";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";

const CartFooter = () => {
  const setCartItems = useContext(CartContext)[1];
  const cartTotal = useContext(CartTotalContext)[0];

  const emptyCart = () => {
    api.delete("/cart").then(() => {
      setCartItems([]);
    });
  };

  return (
    <div className="flex w-full flex-col justify-end border-l-2 shadow-custom3">
      <div className="mb-2 mt-4 flex justify-center" onClick={emptyCart}>
        <button className="flex h-[49px] w-[122px] flex-row items-center rounded-full border-2 border-ue-red text-[20px] text-ue-red hover:bg-ue-red hover:text-white">
          <div className="flex justify-center pl-1 pt-px">
            <DeleteOutlineIcon />
          </div>
          Remove All
        </button>
      </div>
      <div>
        <div className="flex justify-center">
          <p className="text-xl">Order Summary</p>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <div className="pl-4">
            <p className="text-xl">Total</p>
            <div className="flex flex-row items-center">
              <AttachMoneyIcon />
              <p className="text-2xl">{cartTotal}</p>
            </div>
          </div>
          <button className="mr-[10px] h-[49px] w-[122px] rounded-full bg-checkout-blue text-[20px] text-white hover:bg-cyan-cobalt-blue">
            Purchase
            <NavigateNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
