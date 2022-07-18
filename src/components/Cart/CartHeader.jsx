import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShowCartContext from "../../contexts/showCart";

const CartHeader = () => {
  const setShowCart = useContext(ShowCartContext)[1];

  return (
    <div className="flex w-full flex-row items-center justify-between border-b-2 py-4 shadow-custom2">
      <div className="flex flex-row items-center">
        <button className="ml-3 flex flex-col items-center border-r-2 pr-2.5 hover:text-ue-red" onClick={() => setShowCart(false)}>
          <CloseIcon sx={{ fontSize: 40 }} />
          Close
        </button>
        <h1 className="pl-3 text-center text-4xl">Cart</h1>
      </div>
      <button className="mr-[10px] h-[49px] w-[122px] rounded-full bg-checkout-blue text-[20px] text-white hover:bg-cyan-cobalt-blue">
        Purchase
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default CartHeader;
