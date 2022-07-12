import React from "react";
import StaffCard from "./StaffCard";

function StaffCardCollection({ children, staff }) {
  console.dir(staff);
  return (
    <>
      <h2 className="my-8 w-full font-oswald text-4xl">Staff</h2>
      <section className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 content-evenly justify-items-center">
        {staff.map((staff) => (
          <StaffCard staff={staff} />
        ))}
      </section>
    </>
  );
}

export default StaffCardCollection;
