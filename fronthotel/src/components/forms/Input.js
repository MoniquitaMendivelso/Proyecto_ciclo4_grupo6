import React from "react";
import "./forms.css";

export default function Input(props) {
  const { children, type, value, onChange } = props;
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={children}
    ></input>
  );
}
