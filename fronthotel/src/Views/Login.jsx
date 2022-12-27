import React, { useState } from "react";
import Card from "../components/Card";
import Input from "../components/forms/Input";
import Gap from "../components/Gap";
import Button from "../components/forms/Button";
import {API_URL} from "../Services/api";
export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();
    //alert("usr: " + user + " password: " + password);
    const res = await fetch(API_URL+"/login/log", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        Usuario: user,
        Password: password,
      }),
    });

    const data = await res.json();

    console.log(res.status);
    //console.log(data.token);
    const token = data.token;
    console.log("usr: " + user + " password: " + password + " token: " + token);
    //alert("token: " + token);
    switch (res.status) {
      case 200:
        alert("acceso autorizado " /*+ token*/);
        break;
      case 401:
        alert("usuario y/o clave incorrecta: " /*+ token*/);
        break;
    }
  }

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <h1>Inicio de sesion</h1>
      <p>Ingrese datos</p>
      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1>Login</h1>
        <Gap>2rem</Gap>
        <Input value={user} onChange={(v) => setUser(v.target.value)}>
          Usuario
        </Input>
        <Gap>0.5rem</Gap>
        <Input
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
        >
          Password
        </Input>
        <Gap>1rem</Gap>
        <Button type="submit">
          <b>Entrar</b>
        </Button>
      </Card>
    </form>
  );
}
