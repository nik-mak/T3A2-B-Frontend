import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import ListingCard from "../components/catalogue/ListingCard";
import HeroBanner from "../components/catalogue/HeroBanner";
import SortByButton from "../components/SortByButton";
import api from "../helpers/api";
import useAlerts from "../hooks/useAlerts";
import ManageListingModal from "../components/modals/ManageListingModal";
import useModalsReducer from "../hooks/reducers/ModalsReducer";

/**
 * Catalogue page component used to render the catalogue page.
 *
 * @return {HTML} the catalogue page
 */
function Catalogue() {
  // Defines the options used in the filter dropdown
  const options = ["recent", "price(high - low)", "price(low - high)"];
  // Defines the initial option state and callback used by the dropdown
  const [selected, setSelected] = useState(options[0]);
  // Defines the listings state and callback to be displayed in the catalogue
  const [listings, setListings] = useState([]);
  // Defines the current page the user is on
  const [page, setPage] = useState(1);
  // Defines the addAlert method used to render alerts in the useEffect
  const { addAlert } = useAlerts();
  // Defines the number of pages to be displayed in the pagination component
  const [pageCount, setPageCount] = useState(1);
  const [modalStates, setModalStates] = useModalsReducer({
    manageListing: false,
  });

  useEffect(() => {
    api
      .post("/catalogue", {
        page: page,
        amount: 20,
        sort: selected,
        filter: "available",
      })
      .then((response) => {
        setListings(response.data.results);
        setPageCount(response.data.totalPages);
      })
      .catch((response) => {
        addAlert({
          severity: "warning",
          message:
            "Failed to retrieve catalogue because of: " + response.message,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selected]);

  /**
   * Sort handler used to update the catalogue listings when there is a change in the value of the Sort By button
   *
   * @param {String} value a string containing the data needed by the backend to organize/filter the catalogue listings
   */
  function handleSort(value) {
    setSelected(value);
  }

  /**
   * Pagination Handler used to update the catalogue listings when there is a change in the value of the pagination button
   *
   * @param {String} value a string containing the data needed by the backend to organize/filter the catalogue listings
   */
  function handlePagination(e, value) {
    setPage(value);
  }

  return (
    <>
      <HeroBanner />
      <div className="grid">
        <div className="space-y-10 px-10 pt-40">
          <SortByButton
            options={options}
            onChange={handleSort}
            selected={selected}
            setSelected={setSelected}
            label="Sort by: "
          />
          <section className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {listings.map((listing, index) => {
              return (
                <ListingCard
                  key={index}
                  heading={listing.name}
                  size={listing.size}
                  price={listing.price}
                  imageURL={listing.image}
                  itemID={listing._id}
                />
              );
            })}
          </section>
        </div>
        <Pagination
          count={pageCount}
          page={page}
          variant="outlined"
          className="place-self-center py-10"
          onChange={handlePagination}
        />
      </div>
      <ManageListingModal
        open={modalStates.manageListing}
        onClose={() =>
          setModalStates({ modalName: "manageListing", action: "close" })
        }
      />
    </>
  );
}

export default Catalogue;
