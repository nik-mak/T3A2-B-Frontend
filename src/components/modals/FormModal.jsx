import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form";
import CloseIcon from "../Icons/CloseIcon";

// Default styling for the modal box
const style = {
  position: "absolute",
  left: "50%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

/**
 * Form modal component used to dynamically render a responsive form modal
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 * @param {Function} handleSubmit a callback function for the form submit action
 * @param {Object} formFields is an form fields object containing the form fields to be converted into a state
 * @param {String} title the modals title
 * @param {String} submitName the name to be shown on the submit button
 * @param {String} description the description of the modal to be rendered below the modal header
 *
 * @returns {HTML} a modal component with a form
 */
function FormModal({
  open,
  onClose,
  handleSubmit: propHandleSubmit,
  formFields,
  title,
  submitName,
  description,
}) {
  const [formData, setFormData] = useState(formFields);

  // Sets form data whenever formFields changes
  useEffect(() => {
    setFormData(formFields)
  }, [formFields])
  
  /**
   * handle Submit is used to translate the data into the format for the backend where it is sent to the propHandleSubmit callback.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(event) {
    event.preventDefault();

    let newFormData;

    if (formData.some((element) => element.type === "file")) {
      newFormData = new FormData();
      formData.map((element) => {
        if (element.type === "file") {
          return newFormData.append(element.name, element.file);
        }
        return newFormData.append(element.name, element.value);
      });
    } else {
      newFormData = formData.reduce((acc, cur) => {
        acc[cur.name] = cur.value;
        return acc;
      }, {});
    }
    propHandleSubmit(newFormData);
    // ensures that the FormData is cleared after each submit
    setFormData(formFields);
  }
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="overflow-auto hover:overflow-scroll"
    >
      <Box
        sx={style}
        className="flex w-full translate-y-[0] translate-x-[-50%] flex-col sm:top-[50%] sm:w-96 sm:translate-y-[-50%] tall:top-0 tall:translate-y-[0]"
      >
        <button
          onClick={onClose}
          className="flex flex-col items-center self-end hover:text-cyan-cobalt-blue"
        >
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
