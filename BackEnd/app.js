import express from "express"
import mongoose from "mongoose";
import testRouter from "./routes/testRouter.js";
import ServicesRouter from "./routes/ServicesRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://ClusterYamile:Nina2012&@clusterhotel.7poqmno.mongodb.net/ProyecHotel?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada.");
    }
})

//Middleware
app.use(express.json())
app.use("/services", ServicesRouter)
//app.use("/test", testRouter)