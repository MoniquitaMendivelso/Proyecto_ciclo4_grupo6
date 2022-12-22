import  express  from "express";
import { createRoom, readRoom, updateRoom, deleteRoom } from "../controllers/roomController.js";

const roomRauter = express.Router();

// PETICIONES :

//POST
roomRauter.post("/POST", (req, res) => {
    createRoom(req, res)
});

//GET
roomRauter.get("/GET/:size", (req, res) => {
    readRoom(req, res)
});

//PUT - PATCH
roomRauter.patch("/PATCH", (req, res) => {
    updateRoom(req, res)
});

//DELETE
roomRauter.delete("/DELETE", (req, res) => {
    deleteRoom(req, res)
});

export default roomRauter;