import React, { useContext, useState } from "react";
import { useEffect } from "react";
import SelectedListingContext from "../../contexts/selectedListing";
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
function ManageListingModal({ open, onClose }) {
  const { addAlert } = useAlerts();
  const selectedListing = useContext(SelectedListingContext)[0];
  // Defines the initial form fields
  const initialFormFields = [
    { label: "Name", name: "name", value: selectedListing.name, type: "text" },
    {
      label: "Price (AUD)",
      name: "price",
      value: selectedListing.price,
      type: "number",
    },
    { label: "Size", name: "size", value: selectedListing.size, type: "text" },
    {
      label: "Image",
      name: "image",
      value: "",
      type: "file",
      file: null,
      notRequired: true,
    },
  ];

  const [formFields, setFormFields] = useState(initialFormFields);
  // sets the form fields whenever the selected listing changes
  useEffect(() => {
    setFormFields([
      {
        label: "Name",
        name: "name",
        value: selectedListing.name,
        type: "text",
      },
      {
        label: "Price (AUD)",
        name: "price",
        value: selectedListing.price,
        type: "number",
      },
      {
        label: "Size",
        name: "size",
        value: selectedListing.size,
        type: "text",
      },
      {
        label: "Image",
        name: "image",
        value: "",
        type: "file",
        file: null,
        notRequired: true,
      },
    ]);
  }, [selectedListing]);

  /**
   * formatData is used to formate the data and omit the image from being sent in the put request if it is not being updated
   *
   * @param {Object} formData a formData object
   */
  function formatData(formData) {
    if (formFields.find((el) => el.name === "image").file === null) {
      formData.delete("image");
    }
  }
  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed and set error alerts. On success will render success alert and add the item to the catalogues database.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    formatData(formData);
    api
      .put(`/items/${selectedListing.itemID}`, formData)
      .then(() => {
        addAlert({ severity: "success", message: "Successfully updated item" });
      })
      .catch((error) => {
        addAlert({ severity: "warning", message: `Failed to update ${selectedListing.name} because of: ` +error.message });
      });
    onClose();
  }

  const props = {
    open: open,
    onClose: onClose,
    handleSubmit: handleSubmit,
    formFields: formFields,
    title: "Manage Listing",
    submitName: "Save",
    description: "Edit the details below and click save to update this listing",
  };

  return <FormModal {...props} formFields={formFields}></FormModal>;
}

export default ManageListingModal;
