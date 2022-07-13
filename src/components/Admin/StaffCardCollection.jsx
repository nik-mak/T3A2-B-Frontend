import React from "react";
import StaffCard from "./StaffCard";

function StaffCardCollection({ staff, setStaff }) {
  return (
    <>
      <h2 className="m-2 font-oswald text-4xl">Staff</h2>
      <section className="grid grid-flow-row auto-rows-max grid-cols-1 content-evenly justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {staff.map((staff) => (
          <StaffCard key={staff._id} staff={staff} setStaff={setStaff} />
        ))}
      </section>
    </>
  );
}

export default StaffCardCollection;
