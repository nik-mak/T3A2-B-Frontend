import React from "react";
import CartCard from "../CartCard";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const cartItems = [
    {
      name: "T-Shirt",
      size: "S",
      price: 4.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Hoodie",
      size: "XL",
      price: 19.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Jeans",
      size: "M",
      price: 14.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "T-Shirt",
      size: "S",
      price: 4.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Hoodie",
      size: "XL",
      price: 19.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Jeans",
      size: "M",
      price: 14.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "T-Shirt",
      size: "S",
      price: 4.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Hoodie",
      size: "XL",
      price: 19.99,
      image: "http://placekitten.com/200/300",
    },
    {
      name: "Jeans",
      size: "M",
      price: 14.99,
      image: "http://placekitten.com/200/300",
    },
  ];

  return (
    <div className="fixed right-0 m-0 flex h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] max-w-sm flex-col items-center justify-between bg-white p-0 font-oswald">
      <div className="w-80 border-l-2">
        <div className="flex w-full flex-row items-center justify-between border-b-2 py-4 shadow-custom2">
          <div className="flex flex-row items-center">
            <button className="ml-3 flex flex-col items-center border-r-2 pr-2.5 hover:text-ue-red">
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
        <div className="max-h-[calc(100vh-390px)] overflow-auto pt-2">
          {cartItems.map((item) => {
            return (
              <div className="ml-2 mb-2 font-light">
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
      </div>
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
    </div>
  );
};

export default Cart;
