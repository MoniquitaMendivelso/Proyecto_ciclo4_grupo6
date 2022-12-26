import React from "react";
import Button from "../../components/forms/Button";

export default function DataRoom(props) {

        const { data } = props

        const { numHabitacion, disposicion, tamaño, descripcion, costo } = data

    return(
        <div>
            <p>Apartado informacion de la habitacion: <b className="numhabitacion">{numHabitacion}</b></p>
            <div className="block-buttons">
                <h3>Disposición</h3>
                <p className="data">{disposicion}</p>
                <p className="data">La habitacion es {tamaño}</p>
                <h3>Descripción</h3>
                <p className="data">{descripcion}</p>
                <p className="data-costo">Precio {costo}$</p>
                <Button>Editar</Button>
                <Button>Eliminar</Button>
            </div>
        </div>
    );
}
