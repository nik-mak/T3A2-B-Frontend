import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Staff = ({ staff }) => {
  console.log(staff);
  return (
    <div className="m-5 flex justify-between">
      <div>
        <h1 className="font-oswald text-2xl">{staff.role}</h1>
        <h2 className="font-oswald text-2xl">{staff.name.toUpperCase()}</h2>
      </div>
      <div className="flex flex-col items-center">
        <button class="max-w-fit rounded-full px-4 font-oswald font-normal text-ue-red">
          <DeleteForeverOutlinedIcon sx={{ fontSize: 40, color: "#B30001" }} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default Staff;
