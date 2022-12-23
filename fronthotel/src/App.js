import React, { useState } from "react";
import Button from "./components/forms/Button";
import "./assets/global.css";
import Login from "./Views/Login";
import AdminUser from "./Views/AdminUser";
import Gap from "./components/Gap";
import Nav from "./components/Nav";
import Users from "./Views/Users";
import Services from "./Views/Services";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  //*const [view, setview] = useState(<AdminUser></AdminUser>);
  return (
    <div>
     {/* <Nav>
        <Button onClick={() => setview(<Login></Login>)}>Login</Button>
        <Gap direction="horizontal">1rem</Gap>
        <Button onClick={() => setview(<AdminUser></AdminUser>)}>
          AdminUser
        </Button>
        <Gap direction="horizontal">1rem</Gap>
        <Button onClick={() => setview(<Users></Users>)}>
          Users
        </Button>
      </Nav>
      <Gap direction="">1rem</Gap>

  {view}*/}
      <nav className="flex">
        <Link to="/Login">Login</Link>
        <Link to="/AdminUser">Administrador</Link>
        <Link to="/Users">Huespedes</Link>
        <Link to="/Services">Servicios</Link>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/AdminUser" element={<AdminUser></AdminUser>}></Route>
        <Route path="/Users/:name" element={<Users></Users>}></Route>
        <Route path="/Services/" element={<Services></Services>}></Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}
