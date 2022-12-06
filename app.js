import express from "express"
import mongoose from "mongoose";
import testRouter from "./routes/testRouter.js";
import userRouter from "./routes/userRouter.js";
import activityRouter from "./routes/activityRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

mongoose.connect("mongodb+srv://admin:2022@cluster.kjaiirf.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("La base de datos se encuentra conectada.");
    }
})

//Middleware
app.use(express.json())
app.use("/user", userRouter)
app.use("/activity", activityRouter)
app.use("/test", testRouter)