import mongoose from "mongoose";
import {Todo} from "../models/Todo";
let conn=await mongoose.connect('mongodb://localhost:27017/todo');

import express from "express";  
const app = express()
const port = 3000
 
app.get('/', (req, res) => {
          const todo =new Todo({title:"Hey 1st to do",desc:"Description of this todo",isDone:false})
          todo.save(); 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})