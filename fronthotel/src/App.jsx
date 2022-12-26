import React, { useState } from "react";
import "./assets/global.css";
import Login from "./Views/Login";
import AdminUser from "./Views/AdminUser";
import Nav from "./components/NavVistas";
import Users from "./Views/Users/Users";
import Room from "./Views/room/Room";
import Services from "./Views/Services";
import {Route, Routes } from "react-router-dom";

export default function App() {
  //*const [view, setview] = useState(<AdminUser></AdminUser>);
  return (
    <div>
    <Nav></Nav>
    <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/AdminUser" element={<AdminUser></AdminUser>}></Route>
        <Route path="/Users" element={<Users></Users>}></Route>
        <Route path="/Services/" element={<Services></Services>}></Route>
        <Route path="/Room" element={<Room></Room>}></Route>      
        <Route path="*" element={<Login></Login>}></Route>         
    </Routes>
    </div>
  );
}
