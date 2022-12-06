import activityModel from "../models/activityModel.js"

//CRUD
//CREATE
export async function createActivity(req, res) {
    //IMPLEMENTACION AQUI
    // const {nombre, edad, ciudad} = req.body.usuario
    const activity = req.body.activity

    // if (usuario == null) {
    //     res.status(400).json({
    //         "error": "Falta el objeto usuario en el cuerpo de la petición."
    //     })
    //     return
    // }

    let documento

    try {
        documento = await activityModel.create(activity)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}

//READ ALL
export async function readAllActivity(req, res) {
    //IMPLEMENTACION AQUI
    let documento

    try {
        documento = await activityModel.find()
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//READ
export async function readActivity(req, res) {
    //IMPLEMENTACION AQUI
    const id = req.params.id

    let documento

    try {
        documento = await activityModel.findOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//UPDATE
export async function updateActivity(req, res) {

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await activityModel.updateOne({ "_id": id }, updates, { runValidators: true })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//DELETE
export async function deleteActivity(req, res) {
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento = null

    try {
        documento = await activityModel.deleteOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}