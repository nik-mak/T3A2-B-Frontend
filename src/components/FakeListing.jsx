import React from "react";
import BlankImageIcon from "./Icons/BlankImageIcon";

function FakeListing() {
  return (
    <div className="m-4 flex flex-col space-y-4 bg-white p-2 font-oswald text-lg shadow-custom">
      <h2>Fake Listing</h2>
      <BlankImageIcon />
      <div className="flex justify-evenly">
        <h3>Size: Medium</h3>
        <h3>Price: $X.0</h3>
      </div>
      <button className="w-1/2 self-center rounded-full border border-slate-300 bg-ghost-white py-2">
        + Add to cart
      </button>
    </div>
  );
}

export default FakeListing;
