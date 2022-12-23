import express from "express"
import { createServices, deleteServices, readServices, updateServices } from "../controllers/ServicesController.js"

const ServicesRouter = express.Router()

//CRUD
//CREAR: POST
ServicesRouter.post("/", (req, res) => {
    createServices(req, res)
})

//LEER: GET
ServicesRouter.get("/:id", (req, res) => {
    readServices(req, res)
})

//ACTUALIZAR: PUT / PATCH
ServicesRouter.patch("/:id", (req, res) => {
    updateServices(req, res)
})

//ELIMINAR: DELETE
ServicesRouter.delete("/", (req, res) => {
    deleteServices(req, res)
})

export default ServicesRouter