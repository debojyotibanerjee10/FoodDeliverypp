const express=require("express");
const dotenv=require("dotenv")
const cors=require("cors");
const cookieparser=require("cookie-parser");
dotenv.config(path="./.env")
require("./database")
const app=express();
app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use(require("./UserRouter"));
app.use(require("./errormiddleware"))
app.listen(process.env.port,()=>{console.log(`Server running at port ${process.env.port}`)});