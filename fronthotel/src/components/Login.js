import React, { useState } from "react";
import Card from "./Card";
import Input from "./forms/Input";
import Gap from "./Gap";
import Button from "./forms/Button";

export default function Login() {
  function onSubmit(e) {
    e.preventDefault();
    alert("usr: " + user + " password: " + password);
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
