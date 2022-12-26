//*import React from "react";
import Card from "../components/Card";
import Button from "../components/forms/Button";
import ButtonRadio from "../components/forms/ButtonRadio";
import Gap from "../components/Gap";
import React, { useState } from "react";
import Input from "../components/forms/Input";
import {API_URL} from "./api"

function AdminUser() {

  async function  llenarAdmins(e){
    //e.preventDefault();
    const res = await fetch(API_URL + "/login/All", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    }
  });

  const data = await res.json();

  console.log(res.status);
  //console.log(data);
  //console.log(data.length);
  //let cantidadAdmin = data.length;
  //console.log(data[0].Usuario+" dsfdsf")

  const ol = document.createElement("ul");
  ol.id="listaAdmin"
  document.getElementById("listado").appendChild(ol) 

  let cont=0;
  do{
    //console.log(data[cont].Usuario+" dsfdsf asasass")
    
    const li = document.createElement("li");
    li.id = data[cont].Usuario
    li.textContent = data[cont].Usuario
    li.name = "admins"
    const RadioButton = document.createElement("input");
    RadioButton.id = data[cont].Usuario;
    RadioButton.type= "radio"
    if (user===data[cont].Usuario)
    {
      RadioButton.checked= true
    }else{
      RadioButton.checked= false
    }
    RadioButton.name="admins"
    //RadioButton.onchange
    //RadioButton.onche = llenarDatostochange()

    document.getElementById("listaAdmin").appendChild(li).insertAdjacentElement("afterbegin",RadioButton);
    cont=cont+1
  }while(cont < data.length)
  //console.log(user+" ll");
  
  //
  
}

/*
function llenarDatostochange (){
    const usr = document.getElementById("user")
    //usr.textContent = 
    //activarCampos()
}*/

function desactivarCampos (){ 
  //e.preventDefault();
  //document.getElementById("user").setAttribute("type","text")
  //document.getElementById("password").setAttribute("type","password")
  const usr = document.getElementById("user")
    usr.disabled = true

  const pass = document.getElementById("password")
    pass.disabled = true
}

function activarCampos (){ 
  //e.preventDefault();
  //document.getElementById("user").setAttribute("type","text")
  //document.getElementById("password").setAttribute("type","password")
  const usr = document.getElementById("user")
    usr.disabled = false

  const pass = document.getElementById("password")
    pass.disabled = false
}

function limpiarLista(){
  //let child = document.getElementsByName("admins")
 // console.log(child)
  document.getElementById("listaAdmin").remove()      
}


//let cantidadAdmin = 0;

async function crearUsuario(){
  //console.log("vamos a crear usuario: "+user +"  "+password)

  if (user == "" || password == "")
  {
    console.log("ingrese todos los campos")
    alert("ingrese todos los campos")
  }
  else
  {
    //console.log("creando usuario: "+user +"  "+password)

    const res = await fetch("http://localhost:3001/login", {
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
    console.log(data)
    alert("usuario creado")
    limpiarLista()
    //llenarAdmins()
  }


  setUser("")
  setPassword("")
  document.getElementById("user").value = ""
  document.getElementById("password").value = ""
}
function nuevo(e){
  
    e.preventDefault();
    const btn = document.getElementById("guardar")
    const usr = document.getElementById("user")
    if (usr.disabled == false)
    {
      
      crearUsuario()
      desactivarCampos()
      btn.textContent = "Nuevo"
      document.getElementById("modificar").hidden=false
      document.getElementById("eliminar").hidden=false
      limpiarLista()
      llenarAdmins()
    }else{
      activarCampos()
      btn.textContent = "Guardar"
      document.getElementById("modificar").hidden=true
      document.getElementById("eliminar").hidden=true
      
    }
    //activarCampos()
}
async function modificar(e)
{
    
    e.preventDefault();
    //console.log(e)
    const rbuttons = document.getElementsByName('admins')
    //console.log(rbuttons)
    //console.log(rbuttons.length)
    ///console.log(rbuttons[0])
    //console.log(rbuttons[0].id)
    //console.log(rbuttons[0].checked)


    let cont=0;
    
    do{
        //console.log(data[cont].Usuario+" dsfdsf asasass")
        if(rbuttons[cont].checked){
          //console.log(rbuttons[cont].checked)
          //console.log(rbuttons[cont])
          valor = rbuttons[cont].id
          setUser(rbuttons[cont].id)
          activarCampos()
          document.getElementById("user").disabled = true
          document.getElementById("modificar").textContent = "Guardar"
          document.getElementById("guardar").hidden=true
          document.getElementById("eliminar").hidden=true
        }

        cont=cont+1
    }while(cont < rbuttons.length)
    
    
    if(valor === "vacio"){
      console.log("Seleccione un usuario")
      alert("Seleccione un usuario ")
    }else{
      document.getElementById("user").value = user
      //user.setUser((v) => {setUser(v.target.value)})
      limpiarLista()
      //setUser(valor)
      
      

      
      if(user === "" && password === "")
      {
         console.log("campos vacios")
      }else
      { 
      
        if (user === "" || password === "")
        {
          
          alert("ingrese todos los campos ")
          desactivarCampos()
          document.getElementById("user").value = ""
          document.getElementById("password").value = ""
          setUser("")
          setPassword("")
          document.getElementById("modificar").textContent = "Modificar"
          document.getElementById("guardar").hidden=false
          document.getElementById("eliminar").hidden=false
       }
        else
        {
          console.log("Modificando usuarios: "+user+"  "+password) 

          const res = await fetch("http://localhost:3001/login", {
          method: "PATCH",
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
          console.log(data)


          alert("Admin modificado ")
          desactivarCampos()
          document.getElementById("user").value = ""
          document.getElementById("password").value = ""
          setUser("")
          setPassword("")
          document.getElementById("modificar").textContent = "Modificar" 
          document.getElementById("guardar").hidden=false
          document.getElementById("eliminar").hidden=false      
        }
      }
    }
}

async function eliminar(e)
{
    
    e.preventDefault();
    const rbuttons = document.getElementsByName('admins')
    //console.log(rbuttons)
    //console.log(rbuttons.length)
    ///console.log(rbuttons[0])
    //console.log(rbuttons[0].id)
    //console.log(rbuttons[0].checked)


    let cont=0;
    
    do{
        //console.log(data[cont].Usuario+" dsfdsf asasass")
        if(rbuttons[cont].checked){
          //console.log(rbuttons[cont].checked)
          //console.log(rbuttons[cont])
          valor = rbuttons[cont].id
          setUser(rbuttons[cont].id)
          document.getElementById("user").value = user
          
        }

        cont=cont+1
    }while(cont < rbuttons.length)
    
    
    if(valor === "vacio"){
      console.log("Seleccione un usuario")
      alert("Seleccione un usuario ")
    }else{
      //document.getElementById("user").value = user
      //user.setUser((v) => {setUser(v.target.value)})
      limpiarLista()
      //setUser(valor)
      valor = document.getElementById("eliminar").textContent
      if(valor=="Eliminar Usuario")
      {
          //console.log("eliminando")
          const res = await fetch("http://localhost:3001/login", {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            Usuario: user
          
          }),
          });

          const data = await res.json();

          console.log(res.status);
          console.log(data)


          alert("usuario eliminado")
          document.getElementById("user").value = ""
          document.getElementById("password").value = ""
          setUser("")
          setPassword("")
          limpiarLista()
          document.getElementById("eliminar").textContent = "Eliminar"
          document.getElementById("modificar").hidden=false
          document.getElementById("guardar").hidden=false
      }
      else{
        document.getElementById("eliminar").textContent = "Eliminar Usuario"
        document.getElementById("modificar").hidden=true
        document.getElementById("guardar").hidden=true
      }
      
    }
}

function actpassword(v){
  //(v) => {
    //console.log(e)
    //e.preventDefault();
    setPassword(v.target.value)
    //console.log(v) 
    limpiarLista()
  //}
}

function onSubmit(){


}

let valor="vacio";
const [user, setUser] = useState("");
const [password, setPassword] = useState("");

llenarAdmins();




return (

  <form onSubmit={onSubmit} name="form1">
    <h1>Modulo Administrador</h1>
    <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
      <h1>Que deseas hacer</h1>
      <Gap>2rem</Gap>
      <div id="listado">
      
      </div>
      <Gap>2rem</Gap>
      <Input id="user" value={user}  type="text" required="required" 
      disable="disabled" onChange={(v) => {setUser(v.target.value)
      limpiarLista()
      }}>
        Usuario
      </Input>
      <Gap>0.5rem</Gap>
     
      <Input
        id="password"
        type="password"
        required="required"
        value={password}
        onChange={(v) => {actpassword(v)} }
        disable="disabled"
      >
        Password
      </Input>
      <Gap>1rem</Gap>
      <Button id="guardar" type="submit" onClick={nuevo} >
        Nuevo
      </Button>
      <Gap>1rem</Gap>
      <Button id="modificar" type="submit" onClick={modificar}>
        Modificar
      </Button>
      <Gap>1rem</Gap>
      <Button id="eliminar" type="submit" onClick={eliminar}>
        Eliminar
      </Button>

     

      
      </Card>
  </form>
);



}
    


export default AdminUser;
