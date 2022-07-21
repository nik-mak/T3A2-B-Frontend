import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import api from "../../helpers/api";
import useAlerts from "../../hooks/useAlerts";

/**
 * Staff component that is used to display the staff/admin info on a card & a remove button to delete an account.
 *
 * @param {State} param The state containing all the staff and admin account info
 * @param {Callback} param callback function to alter the staff state
 * @returns
 */
const Staff = ({ staff, setStaff }) => {
  const { addAlert } = useAlerts();

  // onClick callback to remove/delete a staff account
  async function removeStaff(e) {
    e.preventDefault();
    const result = window.confirm("Are you sure?");
    if (result) {
      api
        .delete(`/admin/${staff._id}`)
        .then(() => {
          setStaff((prevState) => {
            setStaff(prevState.filter((user) => user !== staff));
          });
          addAlert({
            severity: "success",
            message: "Successfully removed staff member",
          });
        })
        .catch((error) => {
          addAlert({
            severity: "warning",
            message:
              "Failed to remove staff member because of: " +
              (error.response.data || error.message),
          });
        });
    }
  }

  return (
    <div className="m-5 flex justify-between">
      <div>
        <h1 className="font-oswald text-2xl">{staff.role.toUpperCase()}</h1>
        <h2 className="font-oswald text-2xl text-[rgba(0,0,0,0.6)]">
          {staff.name.toUpperCase()}
        </h2>
      </div>
      {staff.role === "staff" ? (
        <div className="flex flex-col items-center" onClick={removeStaff}>
          <button className="max-w-fit rounded-full px-4 font-oswald font-normal hover:text-ue-red">
            <DeleteForeverOutlinedIcon
              sx={{ fontSize: 40 }}
              className="hover:text-ue-red"
            />
            Remove
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Staff;
