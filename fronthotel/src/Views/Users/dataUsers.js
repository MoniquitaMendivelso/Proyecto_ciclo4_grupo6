import React from "react";
import Button from "../../components/forms/Button";

export default function dataUsers(props) {

        const { data } = props

        const { id,Nombre, Cedula, Genero, Edad, Telefono, Email } = data


    return(
        <div>
            <p>Identificador del usuario: <b className="numhabitacion">{id}</b></p>
            <div className="block-buttons">
                <h3>{Nombre}</h3>
                <p className="data">Cedula: {Cedula}</p>
                <p className="data">Genero: {Genero}</p>
                <p className="data">Edad: {Edad}</p>
                <p className="data">Telefono: {Telefono}</p>
                <p className="data">Email:  {Email}</p>
                <Button>Editar</Button>
                <Button>Eliminar</Button>
            </div>
        </div>
    );
}
