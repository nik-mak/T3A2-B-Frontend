import React from "react";

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
function FormInput({ label, type, onChange, value }) {

  const extraProps = {}
  if(type === "file") extraProps.accept = ".jpg, .gif, .png"

  return (
    <div className="flex flex-col space-y-6 font-oswald text-xl">
      <label htmlFor={`${label}`}>{label} </label>
      <input
        type={type || "text"}
        name={label}
        value={value || ""}
        onChange={onChange}
        className="rounded border border-slate-300 p-2 text-xl font-light"
        {...extraProps}
      />
    </div>
  );
}

export default FormInput;
