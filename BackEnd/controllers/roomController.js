import roomModel from "../models/roomModel.js";

// CRUD

export async function createRoom(req, res){
    const room = req.body;

    let documento;

    try {
        documento = await roomModel.create(room)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(201).json(documento)
};

export async function readRoom(req, res){
    const { size } = req.params;

    let documento;

    try {
        documento = await roomModel.find({})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)
};

export async function updateRoom(req, res){
    const id = req.body.id;
    const update = req.body.update;

    let documento = null;

    try {
        documento = await roomModel.updateOne({"_id":id}, update)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)
};

export async function deleteRoom(req, res){
    const id = req.body.id;

    let documento = null;

    try {
        documento = await roomModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)
};