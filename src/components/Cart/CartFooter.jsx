import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartFooter = () => {
  return (
    <div className="mb-2 flex w-full flex-col border-l-2 shadow-custom3">
      <div className="mb-2 mt-4 flex justify-center">
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
              <p className="text-2xl">50</p>
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
