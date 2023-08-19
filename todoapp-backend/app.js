const express=require('express')
const mongooe =require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app=express();
require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
require("./db/mongodb");


const todo=require('./routes/TodoRoute');

app.use('/api',todo)

app.listen(5000,()=>{
    console.log(`sERVER RUNNING ON port 5000`);
});