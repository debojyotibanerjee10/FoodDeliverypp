const user=require("./usermodel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const Errorhandle=require("./errorclass")
exports.createuser=async(req,res,next)=>{
    try{
        const {name,location,password,email}=req.body;
        if(!name||!location||!password||!email)
        return next(new Errorhandle("Please fill the required fields",400));
        const ans=await user.findOne({email});
        if(ans)
        return next(new Errorhandle("User Already exist",200))
        const item=new user(req.body);
        await item.save();
        res.status(201).json({
            success:true,
            message:"User registration successfull"
        });
    }catch(err){
        next(new Errorhandle(err.message,500));
    }
}
exports.login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        if(!password||!email)
        return next(new Errorhandle("Please fill the required fields",200));
        const data=await user.findOne({email})
        if(!data)
        return next(new Errorhandle("User doesnot exist",200));
        const ans=await bcrypt.compare(password,data.password);
        if(ans){
        const token=jwt.sign({email:email},process.env.secretkey,{expiresIn:"1h"});
        res.cookie("jwt",token,{
            maxAge:3600000,
            httpOnly:true
        })
        res.status(200).json({
            success:true,
            message:"Login successfull"
        })
        }
        else
        return next(new Errorhandle("Invalid credentials",200));
    }catch(err){
        next(new Errorhandle(err.message,500));
    }
}