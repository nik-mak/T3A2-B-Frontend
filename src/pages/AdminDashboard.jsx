import React, { useEffect, useState } from "react";
import StaffCardCollection from "../components/Admin/StaffCardCollection";
import api from "../helpers/api";

const AdminDashboard = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    api
      .get("/admin/all/staff")
      .then(({ data }) => {
        setStaff(data);
      })
      .catch()
      .finally(() => console.log("Howdy"));
  }, []);

  return (
    <>
      <h1 className="mt-16 text-center font-oswald text-5xl">Admin Dashboard</h1>
      <div className="flex flex-col items-center">
        <div>
          <StaffCardCollection staff={staff} />
        </div>
        <button class="my-10 max-w-fit rounded-full border border-slate-300 bg-ghost-white py-2 px-4 font-oswald font-normal text-black hover:bg-slate-500 hover:text-white">
          + Add Staff
        </button>
      </div>
    </>
  );
};

export default AdminDashboard;
