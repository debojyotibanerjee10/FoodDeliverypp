const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please Enter Your Name"]
    },
    location:{
        type:String,
        require:[true,"Please Enter Your location"]
    },
    email:{
        type:String,
        require:[true,"Please Enter Your email"]
    },
    password:{
        type:String,
        require:[true,"Please Enter Your password"]
    },
    date:{
        type:Date,
        default:new Date(Date.now())
    }
})
userschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,8)
    }
    next();
})
const user=new mongoose.model("Userinfo",userschema);
module.exports=user;