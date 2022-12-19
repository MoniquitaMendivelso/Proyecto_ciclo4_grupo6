import React from "react"; 
import Button from "../../components/forms/Button";
import "./Home.css";

export default function Home(){
    return(
        <section className="home">
            <h2>Vista HOME</h2>
            <div className="container">
                <div className="descriptions">
                    <p>las mejores habitaciones a un precio justo</p>
                    <Button><b>BOTON!</b></Button>
                </div>
            </div>
        </section>
    );
};