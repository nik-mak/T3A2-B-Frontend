import React, { useState } from "react";
import api from "../../helpers/api";
import useAlerts from "../../hooks/useAlerts";
import HasRole from "../auth/HasRole";
import CartCard from "../cart/CartCard";

/**
 * ListingCard is a component that handles rendering a listing card to be displayed in the catalogue
 *
 * @param {Number} index the order number for the card
 * @param {Date} date the date the order was placed
 * @param {String} shopperName the shoppers name
 * @param {Array} items an array containing the listing items purchased in the order
 * @param {Number} totalPrice the total price of the order
 * @param {Boolean} collected a boolean representing true if the order has been collected
 *
 * @return {HTML} a listing card
 */
function OrderCard({ index, date, shopperName, items, totalPrice, collected }) {
  const [isCollected, setIsCollected] = useState(collected);
  const { addAlert } = useAlerts();
  function handleCollection() {
    api
      .patch(`/order/${index}`)
      .then((response) => {
        addAlert({ severity: "success", message: "Successfully Logged In" });
      })
      .catch((err) => {
        addAlert({ severity: "warning", message: err.message });
      })
      .finally(setIsCollected(true));
  }

  return (
    <div className="m-3 flex flex-col space-y-2 pb-2 font-oswald text-xl font-light p-1 shadow-custom1">
      <h2 className="self-center p-2 font-oswald text-xl font-normal">
        Order ID: <span className="text-lg">{index}</span>{" "}
      </h2>
      <p className="pl-1">Placed on: {date}</p>
      <p className="pb-2 pl-1 shadow-md">Placed by {shopperName}</p>
      <div className="h-56 space-y-3 overflow-auto rounded-md">
        {/* Maps out the order items in a cart card style to be displayed on the order card */}
        {items.map((item, index) => {
          return (
            <CartCard
              key={index}
              name={item.name}
              size={item.size}
              price={item.price}
              image={item.image}
              removable={false}
            />
          );
        })}
      </div>
      <p>Order Summary</p>
      <p>Total Price: ${totalPrice}</p>
      {/* renders the collected button if the item has been collected or the mark as collected button if the user is a staff and the item has not been collected */}
      {isCollected ? (
        <button
          className="w-1/2 self-center rounded-full border border-green-500 bg-green-200 py-2 font-normal"
          type="button"
          disabled
        >
          Collected
        </button>
      ) : (
        <HasRole roles={["staff", "admin"]}>
          <button
            onClick={handleCollection}
            className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2 font-normal hover:bg-slate-100"
          >
            Mark as Collected
          </button>
        </HasRole>
      )}
    </div>
  );
}

export default OrderCard;
