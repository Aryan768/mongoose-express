import mongoose from "mongoose";
import {Todoz} from "./models/Todo.js";
let conn=await mongoose.connect('mongodb://localhost:27017/TODOT');

import express from "express";  
const app = express()
const port = 3000
 
app.get('/', (req, res) => {
          const todo =new Todoz({title:"Heloo AB Todoz",desc:"Description of this todo",isDone:false})
          todo.save(); 
  res.send('Hello World!')
})
app.get('/a',async (req,res) => {
let todo = await Todox.findOne({});
console.log(todo);
res.json({title:todo.title,desc:todo.desc})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})