import React, { useEffect, useState } from "react";
import "./Users.css";
import DataUsers from "./dataUsers.jsx";
import API_URL from "../api"

export default function User(){

    async function fetchData(){
        const res = await fetch(API_URL+"/user/")
        const documents = await res.json()
        setdocuments(documents)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const [documents, setdocuments] = useState([]);

    return(
        <section className="room">
            <h2>Usuarios</h2>
            <div className="input-room">
            <input className="input" placeholder="Buscar por nombre"></input>
            </div>
            <div className="container">
                <p className="tittle">Subscritos</p>
                <div className="block-room">
                    { documents.map((element) => <DataUsers data={element}></DataUsers>) }
                </div>
            </div>
        </section>
    );
};