import React, { useContext } from "react";
import UserContext from "../../contexts/user";
import FormModal from "./FormModal";
import api from "../../helpers/api"
import useAlerts from "../../hooks/useAlerts";

/**
 * Login modal component used to display the login form
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {HTML} a login modal component
 */
function LoginModal({ open, onClose }) {
  const setUser = useContext(UserContext)[1]
  const {addAlert} = useAlerts()
  const formFields = [
    { label: "Email", name: "email", value: "", type: "email" },
    { label: "Password", name: "password", value: "", type: "password" },
  ];

  /**
   * handle Submit is used to describe where to send the data when the sign in form is completed and set error alerts. On success will render success alert and log in the user.
   *
   * @param {Object} formData an object containing the login forms data.
   */
  function handleSubmit(formData) {
    api.post("/auth/login", formData)
    .then((response) => {
      setUser(response.data)
      addAlert({severity:"success", message:"Successfully Logged In"})
    })
    .catch((error) => { 
      addAlert({severity:"warning", message: "Failed to login because of: " +(error.response.data || error.message)})
    })
    .finally( () => {
      onClose()
    })
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
