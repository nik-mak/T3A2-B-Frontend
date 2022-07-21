import React from "react";
import FormModal from "./FormModal";
import api from "../../helpers/api";
import useAlerts from "../../hooks/useAlerts";

/**
 * Add staff modal  component used to display the add staff form
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {HTML} a add staff modal component
 */
function AddStaffModal({ open, onClose, setStaff, staff }) {
  const { addAlert } = useAlerts();
  const formFields = [
    { label: "Name", name: "name", value: "", type: "text" },
    { label: "Email", name: "email", value: "", type: "email" },
    { label: "Password", name: "password", value: "", type: "password" },
  ];

  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed and set error alerts. On success will render success alert and log in the user.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    api
      .post("/admin/register/staff", formData)
      .then((response) => {
        setStaff([response.data, ...staff]);
        addAlert({
          severity: "success",
          message: "Successfully created new staff account",
        });
      })
      .catch((error) => {
        addAlert({ severity: "warning", message: (error.response.data["error"]) || ("Failed to create new staff because of: " +(error.response.data || error.message)) });
      })
      .finally(() => {
        onClose();
      });
  }

  const props = {
    open: open,
    onClose: onClose,
    handleSubmit: handleSubmit,
    formFields: formFields,
    title: "Add Staff",
    submitName: "Submit",
    description: "Please fill in the form",
  };

  return <FormModal {...props}></FormModal>;
}

export default AddStaffModal;
