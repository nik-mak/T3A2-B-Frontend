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
 * Form modal component used to dynamically render a form modal
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 * @param {Function} handleSubmit a callback function for the form submit action
 * @param {Object} handleSubmit an form fields object containing the form fields to be converted into a state
 * @param {String} title the modals title
 * @param {String} submitName the name to be shown on the submit button
 * @param {String} description the description of the modal to be rendered below the modal header
 *
 * @returns {HTML} a modal component with a form
 */
function FormModal({ open, onClose, handleSubmit: propHandleSubmit, formFields, title, submitName, description }) {
  const [formData, setFormData] = useState(formFields);

  /**
   * handle Submit is used to describe where to send the data when the form is complete by calling the propHandleSubmit callback.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(event) {
    event.preventDefault();
    const newFormData = formData.reduce((acc, cur) => {
      acc[cur.name] = cur.value
      return acc
    }, {})
    propHandleSubmit(newFormData)
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="flex flex-col">
        <button onClick={onClose} className="self-end items-center flex flex-col hover:text-cyan-cobalt-blue">
          <div className="h-5 w-5">
              <CloseIcon />
          </div>
          <p className="font-oswald">close</p>
        </button>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          title={title}
          submitName={submitName}
          heading={description}
          onSubmit={onClose}
        ></Form>
      </Box>
    </Modal>
  );
}

export default FormModal;
