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
function FormInput({ label, type, onChange, value }) {
  const [isImage, setIsImage] = useState(type === "file");
  const [file, setFile] = useState(null);
  const [extraProps, setExtraProps] = useState(
    calculateExtraProps(isImage, file, value)
  );

  /**
   * calculateExtraProps calculates the extra props required as input attributes input field is for an image file
   *
   * @param {Boolean} isImage a boolean representing true if the input type is "file"
   * @param {Object} file a file object containing the files data or null if none exists
   * @param {Object} value a value for the input field that belongs to a the input states key-value pair
   *
   * @returns {Object} Object containing the the attributes to be applied to the input (i.e. ({ accept: ".jpg, .gif, .png", file: null }))
   */
  function calculateExtraProps(isImage, file, value) {
    const newExtraProps = {};
    if (isImage) {
      newExtraProps.accept = ".jpg, .gif, .png";
      newExtraProps.file = file;
    } else {
      newExtraProps.value = value || "";
    }
    return newExtraProps;
  }

  // Sets extra props on mount and resets extra props if the input field changes
  useEffect(() => {
    setExtraProps(calculateExtraProps(isImage, file, value));
  }, [isImage, file, value]);

  // Sets isImage boolean if the input fields "type" attribute changes
  useEffect(() => {
    setIsImage(type === "file");
  }, [type]);

  return (
    <div className="flex flex-col space-y-6 font-oswald text-xl">
      <label htmlFor={`${label}`}>{label} </label>
      <input
        type={type || "text"}
        name={label}
        onChange={
          isImage
            ? (e) => {
                setFile(e.target.files[0]);
                onChange(e);
              }
            : onChange
        }
        className="rounded border border-slate-300 p-2 text-xl font-light"
        {...extraProps}
      />
    </div>
  );
}

export default FormInput;
