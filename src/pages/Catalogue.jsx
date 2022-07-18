import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import ListingCard from "../components/ListingCard";
import HeroBanner from "../components/HeroBanner";
import SortByButton from "../components/SortByButton";
import api from "../helpers/api";
import useAlerts from "../hooks/useAlerts";

/**
 * Catalogue page component used to render the catalogue page.
 *
 * @return {HTML} the catalogue page
 */
function Catalogue() {
  const options = ["recent", "price(high - low)", "price(low - high)"];
  const [selected, setSelected] = useState(options[0]);
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(1);
  const { addAlert } = useAlerts();
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    api
      .post("/catalogue", {
        page: page,
        amount: 2,
        sort: selected,
        filter: "available",
      })
      .then((response) => {
        console.log(response.data);
        setListings(response.data.results);
        setPageCount(response.data.totalPages);
      })
      .catch(() => {
        addAlert({ severity: "warning", message: "Problem trying to sort" });
      });
  }, [page, selected]);

  /**
   * Sort handler used to update the catalogue listings when there is a change in the value of the Sort By Button
   *
   * @param {String} value a string containing the data needed by the backend to organize/filter the catalogue listings
   */
  function handleSort(value) {
    setSelected(value);
  }

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
    </>
  );
}

export default Catalogue;
