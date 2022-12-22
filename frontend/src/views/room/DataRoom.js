import React from "react";
import "./Room.css"
import Button from "../../components/forms/Button";

export default function DataRoom(props) {

        const { data } = props

        const { numHabitacion, disposicion, tamaño, descripcion, costo } = data

    return(
        <div>
            <p>apartado informacion de la habitacion</p>
            <div className="block-buttons">
                <p>{numHabitacion}</p>
                <p>{disposicion}</p>
                <p>{tamaño}</p>
                <p>{descripcion}</p>
                <p>{costo}</p>
                <Button>editar</Button>
                <Button>eliminar</Button>
            </div>
        </div>
    );
}
