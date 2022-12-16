import mongoose from "mongoose";


const AdminModel = mongoose.Schema({
    "Usuario": {type:String, required:true, unique :true, minLenght:3, maxLenght:15},
    "Password":{type:String, required:true, minLenght:8, maxLenght:500}
})

export default mongoose.model("admins", AdminModel)