import React from "react";
import api from "../../helpers/api";
import useAlerts from "../../hooks/useAlerts";
import FormModal from "./FormModal";

/**
 * Add Listing Modal component used to display the create listing form to create new listings
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {HTML} a form modal component with the create listing form fields
 */
function AddListingModal({ open, onClose }) {
  const { addAlert } = useAlerts();
  const formFields = [
    { label: "Name", name: "name", value: "", type: "text" },
    { label: "Price (AUD)", name: "price", value: "", type: "number" },
    { label: "Size", name: "size", value: "", type: "text" },
    { label: "Image", name: "image", value: "", type: "file", file: null },
  ];
  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed and set error alerts. On success will render success alert and add the item to the catalogues database.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    api
      .post("/items/add", formData)
      .then(() => {
        addAlert({ severity: "success", message: "Successfully Posted Item" });
      })
      .catch((error) => {
        addAlert({
          severity: "warning",
          message:
            "Failed to create item because of: " +
            (error.response.data || error.message),
        });
      });
    onClose();
  }

  const props = {
    open: open,
    onClose: onClose,
    handleSubmit: handleSubmit,
    formFields: formFields,
    title: "Create Listing",
    submitName: "Create",
    description: "Add a new listing to your catalogue!",
  };

  return <FormModal {...props}></FormModal>;
}

export default AddListingModal;
