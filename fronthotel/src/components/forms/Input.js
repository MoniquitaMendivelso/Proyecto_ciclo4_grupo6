import React from "react";
import "./forms.css";

export default function Input(props) {
  const { id, children, type, value, onChange, disable, required } = props;
  return (
    <input
      id={id}
      className="input"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={children}
      disabled={disable}

      required={required}
    ></input>
  );
}
