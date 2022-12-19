import userModel from "../models/userModel.js"

//CRUD
//CREATE
export async function createUser(req, res){
    //IMPLEMENTACION AQUI
    // const {nombre, edad, ciudad} = req.body.usuario
    const usuario = req.body.usuario

    // if (usuario == null) {
    //     res.status(400).json({
    //         "error": "Falta el objeto usuario en el cuerpo de la petición."
    //     })
    //     return
    // }

    let documento

    try {
        documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}

//READ
export async function readUser(req, res){
    //IMPLEMENTACION AQUI
    const id = req.params.id

    let documento

    try {
        documento = await userModel.findOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//UPDATE
export async function updateUser(req, res){

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await userModel.updateOne({"_id":id},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//DELETE
export async function deleteUser(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento = null

    try {
        documento = await userModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}