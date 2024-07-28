import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: String,
    desc : String,
    isDone : Boolean 
  });
 export const Todoz = mongoose.model('Todox', TodoSchema);      
