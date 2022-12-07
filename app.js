import express from "express";
import mongoose from "mongoose";
import roomRauter from "./routes/roomRauter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("El servidor se está ejecutando correctamente.");
});

mongoose.connect("mongodb+srv://ProjectDB:896534@clusterproject.op6nii7.mongodb.net/projectdb?retryWrites=true&w=majority",
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("La base de datos se encuentra conectada.");
        }
    }
);

//Middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/room", roomRauter);
