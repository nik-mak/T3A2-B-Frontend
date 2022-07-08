import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form";

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

function SignUpModal({ open, onClose }) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Form formFields={{ "Full Name": "", email: "" }} heading="Sign Up"></Form>
      </Box>
    </Modal>
  );
}

export default SignUpModal;
