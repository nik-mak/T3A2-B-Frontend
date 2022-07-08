import React, { useState } from "react";
import FormInput from "./FormInput";

/**
 * Form component used to dynamically render a form using the form fields provided in formData
 *
 * @param {Object} formData a state object containing key: value pairs that correspond to the forms data.
 * @param {String} heading the name of the form or heading to be displayed on the modal
 * @param {String} submitName the name of the form submit button
 * @param {Function} setFormData a callback function used to set the formData
 * @param {Function} handleSubmit a callback function used to handle the form submit event
 *
 * @return {HTML} a form component
 */
function Form({ formData, heading, submitName, setFormData, handleSubmit }) {
  /**
   * handleFormChange is used to update the formData states values when the form is changed.
   *
   * @param {Object} event an object containing the event meta data
   */
  function handleFormChange(index, event) {
    const updatedForm = [ ...formData ];
    updatedForm[index].value = event.target.value;
    setFormData(updatedForm);
  }

  return (
    <>
      <h1 className="font-oswald text-4xl text-center p-2">{heading || ""}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        {formData.map((element, index) => (
          <FormInput
            key={element.name}
            label={element.label}
            onChange={(event) => {
              handleFormChange(index, event);
            }}
            value={element.value}
            type={element.type}
          />
        ))}
        <button className="self-center rounded-full font-oswald text-2xl text-white bg-cyan-cobalt-blue p-2 w-[75%]">{submitName}</button>
      </form>
    </>
  );
}

export default Form;
