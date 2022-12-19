import React, { useEffect, useState } from "react";
import "./Room.css";
import DataRoom from "./DataRoom";

export default function Reservasiones(){

    async function fetchData(id){
        const res = await fetch("http://localhost:8080/room/GET/" + id)
        const documents = await res.json()
        setdocuments(documents)
    }

    const [documents, setdocuments] = useState([]);

    useEffect(() => {
        fetchData(2)
    }, []);

    return(
        <section className="room">
           <form>
            <label>Descripcion:
            <input type="text" name="name" />
            </label><br/>
            <label>fecha ingreso:
            <input type="date" name="name" />
            </label><br/>
            <label>fecha salida:
            <input type="date" name="name" />
            </label><br/>
            <label>Cantidad personas:
            <input type="text" name="name" />
            </label><br/>
            <input type="submit" value="enviar" />
        </form>
        </section>
    );
};