import React from "react";

const Staff = ({ staff }) => {
  console.log(staff);
  return (
    <div className="m-5">
      <div>
        <h1 className="font-oswald text-2xl">{staff.role}</h1>
        <h2 className="font-oswald text-2xl">{staff.name.toUpperCase()}</h2>
      </div>
      <div>{/* remove staff button */}</div>
    </div>
  );
};

export default Staff;
