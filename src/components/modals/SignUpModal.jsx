import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

function SignUpModal({open, onClose}) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="font-oswald text-4xl text-center p-2">Sign Up</h1>
        <form>
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
          <input type="submit" value="Submit" />
        </form>
      </Box>
    </Modal>
  );
}

export default SignUpModal;
