import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import api from "../../helpers/api";

const Staff = ({ staff, setStaff }) => {
  async function removeStaff(e) {
    e.preventDefault();
    api.delete(`/admin/${staff._id}`).then(() => {
      setStaff((prevState) => {
        setStaff(prevState.filter((user) => user !== staff));
      });
    });
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
