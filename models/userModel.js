import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "Nombre": {type:String, required:true},
    "Cedula":{type:Number, required:true},
    "Genero":{type:String, required:true},
    "Edad":{type:Number, required:true},
    "Telefono":{type:Number, required:true},
    "Email": {type:String, required:true}
})

export default mongoose.model("users", userModel)