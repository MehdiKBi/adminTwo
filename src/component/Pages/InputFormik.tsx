import React from "react";

interface defaultState {
  value: string;
  name: string;
  handleChange?: any;
  placeholder: string;
}

function InputFormik({ value, name, handleChange ,placeholder}: defaultState) {
  return (
    <div>
      <div className="input-group mt-1"></div>
      <input
        className="form-control"
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputFormik;
