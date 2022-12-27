import express from "express";
import mongoose from "mongoose";
import AdminModel from "./models/AdminModel.js";
import AdminRouter from "./routes/AdminRouter.js";
import ServicesRouter from "./routes/ServicesRouter.js";
import userRouter from "./routes/userRouter.js";
import roomRauter from "./routes/roomRauter.js"
import Cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("El servidor se está ejecutando correctamente." + port);
});

const uri = process.env.URI

mongoose.set("strictQuery", true);
// @ts-ignore
mongoose.connect(uri, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("La base de datos se encuentra conectada.");
    }
  }
);

app.use(
  Cors({
    origin: process.env.APP_URL,
    // "http://localhost:3000" //direccion front para permisos
  })
);

//Middleware
app.use(express.json());

app.use("/user", userRouter);
app.use("/login", AdminRouter);
app.use("/services", ServicesRouter)
app.use("/room", roomRauter);
app.use("/", (req, res) => res.json("Bienvenido!"));
