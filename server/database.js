const mongoose=require("mongoose");
mongoose.connect(process.env.url).then(()=>{
    console.log("Database connect successfully");
}).catch((err)=>{console.log(err.message)});
