import React, { useState } from "react";
import FormInput from "./FormInput";

/**
 * Form component that takes input formFields to generate a form with those fields and a submit event.
 *
 * @param {Object} formFields an object of key: value pairs in the form (fieldName: initialValue)
 * @param {String} heading the name of the form or heading to be displayed on the modal
 */
function Form({ formFields, heading }) {
  const [formData, setFormData] = useState(formFields);
  const keys = Object.keys(formData)

  function handleFormChange(event) {
    const updatedForm = {...formData}
    updatedForm[event.target.name] = event.target.value
    console.log("Form Changed", updatedForm)
    setFormData(updatedForm)
  }

  return (
    <>
      <h1 className="font-oswald text-4xl text-center p-2">{heading || ""}</h1>
      <form>
      {keys.map((key) => 
        <FormInput key={key} label={key} onChange={handleFormChange} value={formData[`${key}`]}/>
      )}
      </form>
    </>
  );
}

export default Form;
