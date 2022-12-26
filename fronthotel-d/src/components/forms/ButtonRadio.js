import React from "react";
import "./forms.css";


function alert(mensaje) {
  alert(mensaje);
}

export default function checked(props) {
  const { children, onClick, type } = props;
  return (
    <input type="radio" className="ButtonRadio" name= "test-name" checked>
    </input>
  );
}