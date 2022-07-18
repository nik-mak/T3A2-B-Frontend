import React, { useContext, useState } from "react";
import { useEffect } from "react";
import SelectedListingContext from "../../contexts/selecteListing";
import UserContext from "../../contexts/user";
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
  const setUser = useContext(UserContext)[1];
  const { addAlert } = useAlerts();
  const selectedListing = useContext(SelectedListingContext)[0]

  const [formFields, setFormFields] = useState([
    { label: "Name", name: "name", value: selectedListing.name, type: "text" },
    { label: "Price (AUD)", name: "price", value: selectedListing.price, type: "number" },
    { label: "Size", name: "size", value: selectedListing.size, type: "text" },
    { label: "Image", name: "image", value: "", type: "file", file: null },
  ])

  useEffect(()=>{
    setFormFields([
      { label: "Name", name: "name", value: selectedListing.name, type: "text" },
      { label: "Price (AUD)", name: "price", value: selectedListing.price, type: "number" },
      { label: "Size", name: "size", value: selectedListing.size, type: "text" },
      { label: "Image", name: "image", value: "", type: "file", file: null },
    ])
  }, [selectedListing])
  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed and set error alerts. On success will render success alert and add the item to the catalogues database.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    console.log(formData);
    api
      .put(`/items/${selectedListing.itemID}`, formData)
      .then((response) => {
        addAlert({ severity: "success", message: "Successfully updated item" });
        setUser(response.data);
      })
      .catch((response) => {
        addAlert({ severity: "warning", message: response.data });
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
