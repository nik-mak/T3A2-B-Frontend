import React from "react";
import StaffCard from "./StaffCard";

function StaffCardCollection({ children, staff }) {
  console.dir(staff);
  return (
    <>
      <h2 className="my-8 w-full font-oswald text-4xl">Staff</h2>
      <section className="grid grid-flow-row auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 content-evenly justify-items-center">
        {staff.map((staff) => (
          <StaffCard staff={staff} />
        ))}
      </section>
    </>
  );
}

export default StaffCardCollection;
