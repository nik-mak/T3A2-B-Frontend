import React, { useState } from "react";
import FakeListing from "../components/FakeListing";
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
      }, []);
  }

  return (
    <>
      <HeroBanner />
      <div>
        <div className="space-y-10 px-10 pt-40">
          <SortByButton
            options={options}
            onChange={handleSort}
            selected={selected}
          />
          <section className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {Array(10)
              .fill()
              .map((element, index) => {
                return <FakeListing key={index} />;
              })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
