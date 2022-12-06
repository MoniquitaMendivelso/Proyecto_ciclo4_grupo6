import express from "express"
import { createActivity, deleteActivity, readAllActivity, readActivity, updateActivity } from "../controllers/activityController.js"

const activityRouter = express.Router()

//CRUD
//CREAR: POST
activityRouter.post("/", (req, res) => {
    createActivity(req, res)
})

//LEER: GET
activityRouter.get("/:id", (req, res) => {
    readActivity(req, res)
})
//LEER: GET //Todos las activitidades
activityRouter.get("/", (req, res) => {
    readAllActivity(req, res)
})

//ACTUALIZAR: PUT / PATCH
activityRouter.patch("/:id", (req, res) => {
    updateActivity(req, res)
})

//ELIMINAR: DELETE
activityRouter.delete("/", (req, res) => {
    deleteActivity(req, res)
})

export default activityRouter