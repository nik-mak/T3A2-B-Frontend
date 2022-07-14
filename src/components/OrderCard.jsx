import React, { useState } from "react";
import HasRole from "./Auth/HasRole";
import CartCard from "./CartCard";

function OrderCard({ index, date, shopperName, items, totalPrice, collected }) {
  const [iscollected, setIsCollected] = useState(collected);
  function handler() {}
  return (
    <div className="m-3 flex flex-col space-y-2 font-oswald text-xl shadow-custom pb-2 font-light">
      <h2 className="font-oswald text-3xl self-center p-2 font-normal">Order {index} </h2>
      <p>Placed on {date}</p>
      <p>Placed by {shopperName}</p>
      <div className="h-60 space-y-3 overflow-auto">
        {Array(5)
          .fill()
          .map(() => {
            return items.map((item, index) => {
              return (
                <CartCard
                  key={index}
                  name={item.name}
                  size={item.size}
                  price={item.price}
                  image={item.image}
                />
              );
            });
          })}
      </div>
      <p>Order Summary</p>
      <p>Total Price: ${totalPrice}</p>
      {iscollected ? (
        <button
          className="w-1/2 self-center rounded-full border border-green-500 bg-green-200 py-2 font-normal"
          type="button"
          disabled
        >
          Collected
        </button>
      ) : (
        <HasRole roles={["staff", "admin"]}>
          <button onClick={handler} className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2 hover:bg-slate-100 font-normal">Mark as Collected</button>
        </HasRole>
      )}
    </div>
  );
}

export default OrderCard;
