import React, { useState } from "react";


/**
 * FormInput component that generates form labels and inputs.
 *
 * @param {String} label a string containing the input label
 * @param {String} type a string containing the input type
 * @param {Function} onChange a callback function for the onChange event handler 
 * @param {String} value a value for the input field that belongs to a Form Data States key value pair
 */
function FormInput({ label, type, onChange, value }) {
  return (
    <div>
      <label htmlFor={`${label}`}>{label}: </label>
      <input
        type={type || "text"}
        name={label}
        value={value || ""}
        onChange={onChange}
        className="border-2"
      />
    </div>
  );
}

export default FormInput;
