import FormModal from "./FormModal";
import api from "../../helpers/api"
import { useContext } from "react";
import UserContext from "../../contexts/user";
import useAlerts from "../../hooks/useAlerts";
/**
 * SignUp Modal component used to display the sign up form to create new shoppers
 *
 * @param {Boolean} open a boolean representing the open state of the modal (i.e. true for open and false for close)
 * @param {Function} onClose a callback function that handles changing the modal open state to 'close'
 *
 * @returns {HTML} a sign up modal component
 */
function SignUpModal({ open, onClose }) {
  const setUser = useContext(UserContext)[1]
  const {addAlert} = useAlerts()
  const formFields = [
    { label: "Full Name", name: "name", value: "", type: "text" },
    { label: "Email", name: "email", value: "", type: "email" },
    { label: "Password", name: "password", value: "", type: "password" },
  ];

  /**
   * handle Submit is used to describe where to send the data when the sign up form is completed. On success will log in the user and render a success alert. If not successful will render a warning alert.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleSubmit(formData) {
    api.post("/auth/register", formData).then((response) => {
      setUser(response.data)
      addAlert({severity:"success", message:"Successfully Signed Up & Logged In"})
    })
    .catch( (error) => { 
      addAlert({severity:"warning", message: "Failed to register because of: " + (error.response.data["error"] || error.response.data || error.message)})
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
    title: "Sign Up",
    submitName: "Sign Up",
    description: "Join the Desperate Housewares family!",
  };

  return <FormModal {...props}></FormModal>;
}

export default SignUpModal;
