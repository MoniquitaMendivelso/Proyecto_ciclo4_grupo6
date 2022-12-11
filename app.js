import express from "express";
import mongoose from "mongoose";

import reservationRouter from "./routes/reservationRouter.js";
const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

mongoose.connect("mongodb+srv://Proy_Ciclo4UNAB:UNAB2022@clusterproyciclo4unab.ehorasp.mongodb.net/Hotel?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada.");
    }
})

//Middlewares
app.use(express.json())
app.use("/reservation", reservationRouter)