import mongoose from "mongoose";

const perfil = mongoose.Schema({
  mensaje: { type: String, required: true },
  estado: String,
});

const categorias = ["Mujeres", "Hombres", "Unisex",];
const horarios = ["Mañana", "Dia", "Tarde",];

const activityModel = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
    unique: true,
  },
  capacidad: { type: Number, required: true, min: 5, max:50 },
  categoria: { type: String, required: true, enum: categorias },
  horario:{ type: String, required: true, enum: horarios },
});

export default mongoose.model("activities", activityModel);