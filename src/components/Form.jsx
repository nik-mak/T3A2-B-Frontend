import React, { useState } from "react";
import FormInput from "./FormInput";

/**
 * Form component used to dynamically render a form using the form fields provided in formData
 *
 * @param {Object} formData a state object containing key: value pairs that correspond to the forms data.
 * @param {String} heading the name of the form or heading to be displayed on the modal
 * @param {Function} setFormData a callback function used to set the formData
 * @param {Function} handleSubmit a callback function used to handle the form submit event
 * 
 * @return {ReactFragment} form component
 */
function Form({ formData, heading, setFormData, handleSubmit }) {
  const keys = Object.keys(formData)

  /**
   * handleFormChange is used to update the formData states values when the form is changed. 
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleFormChange(event) {
    const updatedForm = {...formData}
    updatedForm[event.target.name] = event.target.value
    setFormData(updatedForm)
  }
  
  return (
    <>
      <h1 className="font-oswald text-4xl text-center p-2">{heading || ""}</h1>
      <form onSubmit={handleSubmit}>
      {keys.map((key) => 
        <FormInput key={key} label={key} onChange={handleFormChange} value={formData[`${key}`]}/>
      )}
      <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
