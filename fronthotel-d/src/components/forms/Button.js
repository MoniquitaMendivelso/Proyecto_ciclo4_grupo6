import React from "react";
import "./forms.css";

function alerta(mensaje) {
  alert(mensaje);
}

export default function Button(props) {
  const { id, children, onClick, type, onSubmit } = props;
  return (
    <button id={id} className="button" type={type} onClick={onClick} onSubmit={onSubmit}>
      {children}
    </button>
  );
}
