import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form";

// Default styling for the modal box
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

/**
 * SignUp Modal component used to display the sign up form
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {Modal} sign Up Modal component
 */
function SignUpModal({ open, onClose }) {
  const formFields = { "Full Name": "", Email: "" };
  const [formData, setFormData] = useState(formFields);

  /**
   * handle Submit is used to describe where to send the data when the sign up form is completed.
   *
   * @param {Object} event an object containing the event meta data
   *
   */
  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log(formData);
    // Todo: Send some data somewhere       !!!!!
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          heading="Sign Up"
        ></Form>
      </Box>
    </Modal>
  );
}

export default SignUpModal;
