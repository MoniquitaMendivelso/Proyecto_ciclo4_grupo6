import React, { useEffect, useState } from "react";
import "./Room.css";
import DataRoom from "./DataRoom";

export default function Room(){

    async function fetchData(){
        const res = await fetch("http://localhost:3001/room/GET")
        const documents = await res.json()
        setdocuments(documents)
    }

    const [documents, setdocuments] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    return(
        <section className="room">
            <h2>HABITACIONES</h2>
            <div className="input-room">
            <input className="input" placeholder="Buscar por tamaño"></input>
            </div>
            <div className="container">
                <p className="tittle">Disponibilidad</p>
                <div className="block-room">
                    { documents.map((element) => <DataRoom data={element}></DataRoom>) }
                </div>
            </div>
        </section>
    );
};