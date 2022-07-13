import React, { useEffect, useState } from "react";

/**
 * FormInput component that generates form labels and inputs.
 *
 * @param {String} label a string containing the input label
 * @param {String} type a string containing the input type
 * @param {Function} onChange a callback function for the onChange event handler
 * @param {String} value a value for the input field that belongs to a Form Data States key value pair
 *
 * @returns {HTML} a form input component
 */
function FormInput({ label, type, onChange, value, file }) {
  const isImage = file !== undefined
  const extraProps = {};
  if (isImage) {
    extraProps.accept = ".jpg, .gif, .png";
    extraProps.file = file;
  } else {
    extraProps.value = value || "";
  }

  return (
    <div className="flex flex-col space-y-6 font-oswald text-xl">
      <label htmlFor={`${label}`}>{label} </label>
      <input
        type={type || "text"}
        name={label}
        onChange={onChange}
        className="rounded border border-slate-300 p-2 text-xl font-light"
        {...extraProps}
      />
    </div>
  );
}

export default FormInput;
