import ServicesModel from "../models/ServicesModel.js"

//CRUD
//CREATE
export async function createServices(req, res){
    //IMPLEMENTACION AQUI
    // const {nombre, edad, ciudad} = req.body.usuario
    const Services = req.body.Services

    // if (usuario == null) {
    //     res.status(400).json({
    //         "error": "Falta el objeto usuario en el cuerpo de la petición."
    //     })
    //     return
    // }

    let documento

    try {
        documento = await ServicesModel.create(Services)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}

//READ
export async function readServices(req, res){
    //IMPLEMENTACION AQUI
    const id = req.params.id

    let documento

    try {
        documento = await ServicesModel.findOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//UPDATE
export async function updateServices(req, res){

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await ServicesModel.updateOne({"_id":id},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//DELETE
export async function deleteServices(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento = null

    try {
        documento = await ServicesModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}