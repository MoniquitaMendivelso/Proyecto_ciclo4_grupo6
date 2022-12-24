import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "_id": { type: Number, require: true },
    "Nombre": {type:String, required:true, minLenght:3, maxLenght:50},
    "Cedula":{type:Number, required:true, unique:true},
    "Genero":{type:String, required:true, minLenght:5, maxLenght:10},
    "Edad":{type:Number, required:true, min:1, max:120},
    "Telefono":{type:Number, required:true},
    "Email": {type:String, required:true}
})

export default mongoose.model("users", userModel)