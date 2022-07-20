import React, { useContext, useState } from "react";
import CartContext from "../../contexts/cart";
import CartTotalContext from "../../contexts/total";
import ModalsContext from "../../contexts/modals";
import SelectedListingContext from "../.././contexts/selectedListing";
import UserContext from "../../contexts/user";
import api from "../../helpers/api";
import useAlerts from "../../hooks/useAlerts";
import HasRole from ".././Auth/HasRole";
import NotLoggedIn from ".././Auth/NotLoggedIn";
import BinIcon from ".././Icons/BinIcon";

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
  // Defines the user so that roles can be checked when rendering components.
  const { user } = useContext(UserContext);
  // Defines teh cart items to be displayed in the cart
  const [cartItems, setCartItems] = useContext(CartContext)
  const [cartTotal, setCartTotal] = useContext(CartTotalContext)

  // Defines the addAlert method used to create new alerts
  const { addAlert } = useAlerts();

  // Defines the isRemoved property that is used to hide/remove the specific listing from the catalogue if it has been removed
  const [isRemoved, setIsRemoved] = useState(false);

  // defines modalStates and setModalStates using context provider
  const setModalStates = useContext(ModalsContext)[1];
  const setSelectedListing = useContext(SelectedListingContext)[1];

  /**
   * A function that handles removing a listing item from the catalogue using the itemID
   */
  function removeHandler() {
    api
      .delete(`/items/${itemID}`)
      .then(() => {
        addAlert({
          severity: "success",
          message: `Successfully removed item '${heading}'`,
        });
        setIsRemoved(true);
      })
      .catch((error) => {
        addAlert({
          severity: "warning",
          message: `Failed to remove item '${heading}' because of: ` + (error.response.data || error.message),
        });
      });
  }
  /**
   * A function that handles adding a listing item to a users cart using the itemID
   */
  function addToCartHandler() {
    api
      .put(`/cart/${itemID}`, itemID)
      .then((res) => {
        setCartItems([...cartItems, res.data]);
        setCartTotal(cartTotal + res.data.price);
        addAlert({
          severity: "success",
          message: `Successfully added '${heading}' to the your cart!`,
        });
      })
      .catch((response) => {
        if (user === undefined) {
          addAlert({
            severity: "warning",
            message: response.message,
          });
          addAlert({
            severity: "warning",
            message: "Please login to add this item to your cart",
          });
        } 
      });
  }

  return isRemoved ? (
    <></>
  ) : (
    <div className="m-4 flex flex-col space-y-4 bg-white p-2 font-oswald text-lg shadow-custom2">
      <div className="flex flex-row items-center justify-between">
        <h2 className="mr-2">{heading}</h2>
        {/* Displays remove listing if user is staff or admin */}
        <HasRole roles={["admin", "staff"]}>
          <button
            className="mr-2 flex w-[20px] flex-col items-center self-center hover:text-ue-red"
            onClick={removeHandler}
          >
            <BinIcon></BinIcon>
            <p className="font-oswald text-base">remove</p>
          </button>
        </HasRole>
      </div>
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
      {/* Displays add to cart button if user is customer */}
      <HasRole roles={["customer"]}>
        <button
          className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2 hover:bg-slate-100"
          onClick={addToCartHandler}
        >
          + Add to cart
        </button>
      </HasRole>
      {/* Displays add to cart button if user is not logged in */}
      <NotLoggedIn>
        <button
          className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2 hover:bg-slate-100"
          onClick={addToCartHandler}
        >
          + Add to cart
        </button>
      </NotLoggedIn>
      {/* displays manage listing button if user is staff or admin */}
      <HasRole roles={["staff", "admin"]}>
        <button
          className="w-2/3 self-center rounded-full border border-slate-300 bg-ghost-white py-2 hover:bg-slate-100"
          onClick={() => {
            setSelectedListing({
              name: heading,
              size,
              price,
              itemID,
            });
            setModalStates({ modalName: "manageListing", action: "open" });
          }}
        >
          Manage Listing
        </button>
      </HasRole>
    </div>
  );
}

export default ListingCard;
