import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/life-os')
    .then(()=>console.log("DB Connected"))
}