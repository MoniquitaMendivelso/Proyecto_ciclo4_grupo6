import React from "react";
import { Link } from "react-router-dom";
import "./NavVistas.css";

export default function Nav(){
    return(
        <nav className="nav">
            <div className="list flex">
                <div className="link">
                    <Link to="/Login"><b className="nav-tittle">Login</b></Link>
                </div>
                <div className="link" >
                    <Link to="/Room"><b className="nav-tittle">Rooms</b></Link>
                </div>
                <div className="link">
                    <Link to="/AdminUser"><b className="nav-tittle">Administradores</b></Link>
                </div>
                <div className="link">
                    <Link to="/Users"><b className="nav-tittle">Usuarios</b></Link>
                </div>
            </div>
        </nav>
    );
}