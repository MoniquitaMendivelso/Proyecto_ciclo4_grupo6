import express from "express"
import mongoose from "mongoose";
import AdminModel from "./models/AdminModel.js";
import AdminRouter from "./routes/AdminRouter.js";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://Proy_Ciclo4UNAB:UNAB2022@clusterproyciclo4unab.ehorasp.mongodb.net/Hotel?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada.");
    }
})

//Middleware
app.use(express.json())
app.use("/user", userRouter)
app.use("/login", AdminRouter)
//app.use("/test", testRouter)