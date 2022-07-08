import FormModal from "./FormModal";

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

  /**
   * handle Submit is used to describe where to send the data when the sign up form is completed.
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
    title: "Sign Up",
    submitName: "Sign Up",
    description: "Join the Desperate Housewares family!",
  };

  return <FormModal {...props}></FormModal>;
}

export default SignUpModal;
