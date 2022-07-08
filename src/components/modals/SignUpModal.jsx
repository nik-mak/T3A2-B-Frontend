import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form";
import CloseIcon from "../Icons/CloseIcon";

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
 * @returns {HTML} a sign up modal component
 */
function SignUpModal({ open, onClose }) {
  const formFields = [
    { label: "Full Name", name: "fullName", value: "", type: "text" },
    { label: "Email", name: "email", value: "", type: "email" },
    { label: "Password", name: "password", value: "", type: "password" },
  ];
  const [formData, setFormData] = useState(formFields);

  /**
   * handle Submit is used to describe where to send the data when the sign up form is completed.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(event) {
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
      <Box sx={style} className="flex flex-col">
        <div onClick={onClose} className="self-end items-center flex flex-col hover:text-cyan-cobalt-blue">
          <div className="h-5 w-5">
              <CloseIcon />
          </div>
          <p className="font-oswald">close</p>
        </div>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          title="Sign Up"
          submitName="Sign Up"
          heading="Join the Desperate Housewares family!"
        ></Form>
      </Box>
    </Modal>
  );
}

export default SignUpModal;
