const express=require("express");
const { createuser, login} = require("./usercontroller");
const router=express.Router();
router.route("/createuser").post(createuser)
router.route("/loginuser").post(login)
module.exports=router;