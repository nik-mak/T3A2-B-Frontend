import React, { useState } from "react";
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
  const options = ["Recent", "Price (High - Low)", "Price (Low - High)"];
  const [selected, setSelected] = useState(options[0]);
  const setListings = useState()[1];
  const { addAlert } = useAlerts();

  /**
   * Sort handler used to update the catalogue listings when there is a change in the value of the Sort By Button
   *
   * @param {String} value a string containing the data needed by the backend to organize/filter the catalogue listings
   */
  function handleSort(value) {
    setSelected(value);
    api
      .post("URL", value)
      .then((response) => {
        setListings(response.data);
      })
      .catch(() => {
        addAlert({ severity: "warning", message: "Problem trying to sort" });
      });
  }

  return (
    <>
      <HeroBanner />
      <SortByButton
        options={options}
        onChange={handleSort}
        selected={selected}
      />
    </>
  );
}

export default Catalogue;
