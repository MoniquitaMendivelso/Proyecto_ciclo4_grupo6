import mongoose from "mongoose";

const ServicesModel = mongoose.Schema({
    "desayuno": {type:Boolean, required:true},
    "almuerzo":{type:Boolean, required:true},
    "cena":{type:Boolean, required:true},
})

export default mongoose.model("Servicios", ServicesModel)