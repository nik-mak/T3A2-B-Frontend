import React from "react";
import DollarSignIcon from "./Icons/DollarSignIcon";


/**
 * CartCard is a component that handles rendering a listing card styled like a cart item
 *
 * @return {HTML} a styled card
 */
function CartCard({ name, image, price, size }) {
  return (
    <div className="flex w-[300px] flex-row shadow-custom">
      <div className="mr-2 h-24 w-20 flex-shrink-0 overflow-hidden border border-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col justify-between font-oswald">
        <div className="text-xl">
          <p>{name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">Size: {size}</p>
          <div className="flex flex-col-reverse pb-4 pr-8">
            <div className="flex justify-end">
              <DollarSignIcon />
              <p className="text-4xl">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
