import React from "react";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

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
    <div className="fixed right-0 z-50 m-0 flex h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] max-w-sm flex-col items-center justify-between bg-white p-0 font-oswald after:right-0">
      <div className="w-80 border-l-2">
        <CartHeader />
        <CartContent cartItems={cartItems} />
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
