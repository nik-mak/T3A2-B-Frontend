import React from "react";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

const Cart = () => {
  return (
    <div className="fixed right-0 top-[79px] z-50 m-0 flex h-[calc(100vh-78px)] flex-col items-center justify-between bg-white p-0 font-oswald sm:top-[96px] sm:h-[calc(100vh-96px)]">
      <div className="w-screen border-l-2 sm:w-80">
        <CartHeader />
        <CartContent />
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
