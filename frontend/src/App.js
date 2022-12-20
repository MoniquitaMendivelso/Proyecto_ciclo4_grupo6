import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "./assets/global.css"
import Nav from './components/NavVistas';
import Reservasiones from './views/room/Reservasiones';

export default function App(){
    return(
        <div className='container'>
            <Nav></Nav>
            <Routes>
                <Route path="/Reservasiones" element={<Reservasiones></Reservasiones>}></Route>                
            </Routes>
        </div>
    );
};