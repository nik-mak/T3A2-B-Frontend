import React, { useEffect, useState } from "react";
import StaffCardCollection from "../components/admin/StaffCardCollection";
import AddStaffModal from "../components/modals/AddStaffModal";
import api from "../helpers/api";
import useModalsReducer from "../hooks/reducers/ModalsReducer";
import useAlerts from "../hooks/useAlerts";

/**
 * Admin Dashboard page used to render the admin dashboard
 *
 * @returns {HTML} the admin dashboard
 */
const AdminDashboard = () => {
  const [staff, setStaff] = useState([]);
  const {addAlert} = useAlerts()
  // Initial state for the addStaff Modal
  const initialState = { addStaff: false };
  const [modalStates, setModalStates] = useModalsReducer(initialState);

  // Fetch all staff and admin accounts from the db
  useEffect(() => {
    api
      .get("/admin/all/staff")
      .then(({ data }) => {
        setStaff(data);
      })
      .catch((error) => {
        addAlert({severity:"warning", message:"Failed to retrieve staff because of: " + (error.response.data || error.message)})
      });
  }, []);

  return (
    <>
      <h1 className="mt-16 mb-5 text-center font-oswald text-5xl">
        Admin Dashboard
      </h1>
      <div className="flex flex-col items-center">
        <div>
          <StaffCardCollection staff={staff} setStaff={setStaff} />
        </div>
        <button
          onClick={() =>
            setModalStates({ modalName: "addStaff", action: "open" })
          }
          className="my-10 max-w-fit rounded-full border border-slate-300 bg-ghost-white py-2 px-4 font-oswald font-normal text-black transition duration-500 hover:bg-slate-500 hover:text-white"
        >
          + Add Staff
        </button>
      </div>
      <AddStaffModal
        setStaff={setStaff}
        staff={staff}
        open={modalStates.addStaff}
        onClose={() =>
          setModalStates({ modalName: "addStaff", action: "close" })
        }
      />
    </>
  );
};

export default AdminDashboard;
