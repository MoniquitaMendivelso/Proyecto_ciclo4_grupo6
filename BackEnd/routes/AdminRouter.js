import express from "express"
import { createAdmin, deleteAdmin, readAdmin, readAdminAll, updateAdmin, loginAdmin, verificarAdmin } from "../controllers/AdminController.js"


const AdminRouter = express.Router()

//CRUD
//CREAR: POST
AdminRouter.post("/", (req, res) => {
    createAdmin(req, res)
})
AdminRouter.post("/log", (req, res) => {
    loginAdmin(req, res)
})
AdminRouter.get("/verificar", (req, res) => {
    verificarAdmin(req, res)
})
// leer todos los admins
AdminRouter.get("/All", (req, res) => {
    // console.log("user router"+cedula);
     readAdminAll(req, res)
 })
//LEER: GET
AdminRouter.get("/", (req, res) => {
   // console.log("user router"+cedula);
    readAdmin(req, res)
})

//ACTUALIZAR: PUT / PATCH
AdminRouter.patch("/", (req, res) => {
    updateAdmin(req, res)
})

//ELIMINAR: DELETE
AdminRouter.delete("/", (req, res) => {
    deleteAdmin(req, res)
})

export default AdminRouter