import React from "react";
import { Link } from "react-router-dom";
import "./NavVistas.css";

export default function Nav(){
    return(
        <nav className="nav">
            <div className="list flex">
                <div className="link">
                    <Link to="/"><b>Home</b></Link>
                </div>
                <div className="link-room" >
                    <Link to="/Reservasiones"><b>Reservasiones</b></Link>
                </div>
            </div>
        </nav>
    );
}