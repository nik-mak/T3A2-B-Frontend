import React, { useState } from "react";



function FormInput({ label, type, onChange, value }) {
    // const [value, setValue] = useState('')
    // const handleChange = (event) => {
    //     setValue(event.target.value)
    // }
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
