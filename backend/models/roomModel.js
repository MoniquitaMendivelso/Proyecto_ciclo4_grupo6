import mongoose from "mongoose";

const roomModel = mongoose.Schema({
    "_id": { type: Number, require: true },
    "numHabitacion": { type: Number, require: true },
    "disposicion": { type: String, require: true },
    "tamaño": { type: String, require: true },
    "descripcion": { type: String, require: true },
    "costo": { type: Number, require: true },    
});
export default mongoose.model("room", roomModel);
