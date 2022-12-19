import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "./assets/global.css"
import Nav from './components/NavVistas';
import Home from './views/home/Home';
import Reservasiones from './views/room/Reservasiones';

export default function App(){
    return(
        <div>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Reservasiones" element={<Reservasiones></Reservasiones>}></Route>                
            </Routes>
        </div>
    );
};