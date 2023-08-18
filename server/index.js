const express=require("express");
const dotenv=require("dotenv")
dotenv.config(path="./.env")
require("./database")
const app=express();
app.listen(process.env.port,()=>{console.log(`Server running at port ${process.env.port}`)});