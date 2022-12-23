import React, { useEffect, useState } from "react";
import "./Room.css";
import DataRoom from "./DataRoom";

export default function Room(){

    async function fetchData(size){
        const res = await fetch("http://localhost:8080/room/GET/" + size)
        const documents = await res.json()
        setdocuments(documents)
    }

    const [documents, setdocuments] = useState([]);

    useEffect(() => {
        fetchData("mediana")
    }, []);

    return(
        <section className="room">
            <h2>Vista ROOM</h2>
            <div className="input-room">
            <input className="input" placeholder="busca por tamaño"></input>
            </div>
            <div className="container">
                <p className="tittle">Habitaciones</p>
                <div className="block-room">
                    { documents.map((element) => <DataRoom data={element}></DataRoom>) }
                </div>
            </div>
        </section>
    );
};