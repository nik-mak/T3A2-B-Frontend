import React from "react";
import Staff from "./Staff";

/**
 * Staff Card component that is used to contain the info of each staff/admin account
 *
 * @param {State} param The state containing all the staff and admin account info
 * @param {Callback} param callback function to alter the staff state
 * @returns
 */
const StaffCard = ({ staff, setStaff }) => {
  return (
    <div className="m-2 h-28 w-80 shadow-custom2">
      <Staff staff={staff} setStaff={setStaff} />
    </div>
  );
};

export default StaffCard;
