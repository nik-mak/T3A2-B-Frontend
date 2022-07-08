import React from "react";
import FormModal from "./FormModal";

/**
 * Login modal component used to display the login form
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {HTML} a login modal component
 */
function LoginModal({ open, onClose }) {
  const formFields = [
    { label: "Email", name: "email", value: "", type: "email" },
    { label: "Password", name: "password", value: "", type: "password" },
  ];

  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    console.log(formData);
    // Todo: Send some data somewhere       !!!!!
  }

  const props = {
    open: open,
    onClose: onClose,
    handleSubmit: handleSubmit,
    formFields: formFields,
    title: "Login",
    submitName: "Login",
    description: "Welcome back to Desperate Housewares",
  };

  return <FormModal {...props}></FormModal>;
}

export default LoginModal;
