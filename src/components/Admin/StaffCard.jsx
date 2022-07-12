import React from "react";
import Staff from "./Staff";

const StaffCard = ({ staff }) => {
  return (
    <div className="m-2 h-28 w-64 shadow-custom">
      <Staff staff={staff} />
    </div>
  );
};

export default StaffCard;
