import React, { useEffect, useState } from "react";
import "./Room.css";
import DataRoom from "./DataRoom";

export default function Reservasiones(){

    async function fetchData(id){
        var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
    }

    
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