import React, { useContext } from "react";
import UserContext from "../contexts/user";
import api from "../helpers/api";
import useAlerts from "../hooks/useAlerts";

/**
 * ListingCard is a component that handles rendering a listing card to be displayed in the catalogue
 *
 * @param {String} heading the heading to be displayed as the cards title
 * @param {String} size the size to be displayed on the card
 * @param {Number} price the price of the item to be displayed on the card
 * @param {String} imageURL the url link to an image of the item to be displayed on the card
 * @param {itemID} itemID the itemID used to identify the catalogue listing
 *
 * @return {HTML} a listing card
 */
function ListingCard({ heading, size, price, imageURL, itemID }) {
  const user = useContext(UserContext)[0];
  const { addAlert } = useAlerts();

  const { cart } = React.useContext(UserContext);
  const [setCartItems] = cart;

  /**
   * A function that handles adding a listing item to a users cart using the itemID
   */
  function addToCartHandler() {
    api
      .put(`/cart/${itemID}`, itemID)
      .then((response) => {
        addAlert({
          severity: "success",
          message: response.data,
        })
          .then(api.get("/cart"))
          .then(({ data }) => {
            setCartItems(data);
          });
      })
      .catch((response) => {
        if (user === undefined) {
          addAlert({
            severity: "warning",
            message: "Please login to add this item to your cart",
          });
        } else {
          addAlert({ severity: "warning", message: response.message });
        }
      });
  }

  return (
    <div className="m-4 flex flex-col space-y-4 bg-white p-2 font-oswald text-lg shadow-custom">
      <h2>{heading}</h2>
      {/* <BlankImageIcon /> */}
      <img
        src={imageURL}
        alt={heading}
        className="aspect-square w-full object-cover"
      />
      <div className="flex justify-evenly">
        <h3>Size: {size}</h3>
        <h3>
          Price: <span className="font-roman">$</span>
          {price}
        </h3>
      </div>
      <button
        className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2 hover:bg-slate-100"
        onClick={addToCartHandler}
      >
        + Add to cart
      </button>
    </div>
  );
}

export default ListingCard;
