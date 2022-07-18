import React from "react";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

const Cart = () => {
  return (
    <div className="fixed right-0 top-[79px] z-[98] m-0 flex h-[calc(100vh-78px)] flex-col items-center justify-between bg-white font-oswald sm:top-[96px] sm:h-[calc(100vh-96px)]">
      <div className="w-screen sm:w-80 mr-3 border border-t-2">
        <CartHeader />
        <CartContent />
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
