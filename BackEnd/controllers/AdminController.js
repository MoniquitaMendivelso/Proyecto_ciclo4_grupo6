import AdminModel from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN =
  "db722c5d642a6ea92f4080d1af55541de5a9646084b5c3ac0b713832ef2fa39da0541243858e2487f33aacbbcf35429a84d954aab55a0de71b4f9feebfc95fa2";

//CRUD
//CREATE
export async function createAdmin(req, res) {
  //IMPLEMENTACION AQUI
  // const {nombre, edad, ciudad} = req.body.usuario
  const Usuario = req.body; //el objeto usuario que recibe por body
  //console.log(Usuario.Usuario)
  const password = Usuario.Password;
  console.log(password);

  //encripta contraseña
  const salt = await bcrypt.genSalt(10); //aleatorio
  const secPassw = await bcrypt.hash(password.toString(), salt);
  console.log(secPassw);

  // if (usuario == null) {
  //     res.status(400).json({
  //         "error": "Falta el objeto usuario en el cuerpo de la petición."
  //     })
  //     return
  // }

  let documento;

  try {
    documento = await AdminModel.create({
      Usuario: Usuario.Usuario,
      Password: secPassw,
    }); //Usuario como objto json
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(201).json(documento);
}

//verificar
export async function verificarAdmin(req, res) {
  //IMPLEMENTACION AQUI
  const { token } = req.headers; //recibe por cabecera el token

  let usuario;

  try {
    usuario = jwt.verify(token, ACCESS_TOKEN); //verifica el token y devuelve el valor usuario
    //res.status(200).json(token)
  } catch (error) {
    res.json(error.message);
    return;
  }

  res.json(usuario);
}

//login
export async function loginAdmin(req, res) {
  //IMPLEMENTACION AQUI
  const Usuario = req.body.Usuario;
  const password = req.body.Password;
  console.log("usuario: " + Usuario + "Password: " + password);

  let documento;

  try {
    documento = await AdminModel.findOne({ Usuario: Usuario }); //consullta en BD y guarda en docuemnto
    console.log(documento);
    console.log(documento.Password);

    const acceso = await bcrypt.compare(password, documento.Password); //compara contraseña ingreasada con la contraseña d eBD

    if (acceso) {
      console.log("authorized: " + acceso);
      const token = jwt.sign(Usuario, ACCESS_TOKEN); //crea un tokenpersonal para el usuario
      //res

      res.status(200).json({ token: token });
      //console.log(res);
    } else {
      console.log("NO authorized: " + acceso);
      res.status(401).json({ token: "Unauthorized" }); //.json(documento)
    }
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  //res.status(200).json(documento)
}

//READ
export async function readAdmin(req, res) {
  //IMPLEMENTACION AQUI
  const Usuario = req.body.Usuario;

  let documento;

  try {
    documento = await AdminModel.findOne({ Usuario: Usuario });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}

//UPDATE
export async function updateAdmin(req, res) {
  //IMPLEMENTACION AQUI
  //1) findOneAndUpdate
  //2) findOne ... Update

  const username = req.body;
  //const contraseña = req.body.password

  let documento = null;

  try {
    documento = await AdminModel.updateOne(username);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}

//DELETE
export async function deleteAdmin(req, res) {
  //IMPLEMENTACION AQUI
  const Usuario = req.body;

  let documento = null;

  try {
    documento = await AdminModel.deleteOne(Usuario);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}
