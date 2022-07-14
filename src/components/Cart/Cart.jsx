import React from "react";
import CartCard from "./CartCard";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const cartItems = [
    {
      name: "T-Shirt",
      size: "S",
      price: 4.99,
    },
    {
      name: "Hoodie",
      size: "XL",
      price: 19.99,
    },
    {
      name: "Jeans",
      size: "M",
      price: 14.99,
    },
  ];

  return (
    <div className="top-100 fixed right-0 z-50 flex h-full w-80 max-w-sm flex-col items-center bg-white font-oswald">
      <div className="mb-4 flex w-full flex-row items-center border-b-2 py-4 shadow-custom2">
        <button className="ml-3 flex flex-col items-center border-r-2 pr-2.5 hover:text-ue-red">
          <CloseIcon sx={{ fontSize: 40 }} />
          Close
        </button>
        <h1 className="pl-3 text-center text-4xl">Cart</h1>
      </div>
      <CartCard items={cartItems} />
    </div>
  );
};

export default Cart;
