import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
    "descripcion": {type:String, required:true},
    "fecha":{type:Number, required:true},
    "cantidadIngreso":{type:String, required:true}
})

export default mongoose.model("reservation", reservationModel)