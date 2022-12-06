import express from "express"
import { createReservation, deleteReservation, readReservation, updateReservation } from "../controllers/userController.js"

const reservationRouter = express.Router()

//CRUD
//CREAR: POST
eservationRouter.post("/", (req, res) => {
    createReservation(req, res)
})

//LEER: GET
reservationRouter.get("/:id", (req, res) => {
    readReservation(req, res)
})

//ACTUALIZAR: PUT / PATCH
reservationRouter.patch("/:id", (req, res) => {
    updateReservation(req, res)
})

//ELIMINAR: DELETE
reservationRouter.delete("/", (req, res) => {
    deleteReservation(req, res)
})

export default reservationRouter