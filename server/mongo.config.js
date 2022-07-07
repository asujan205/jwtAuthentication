import mongoose from "mongoose";
const url="mongodb://127.0.0.1:27017/UserAuth"
mongoose.connect(url,{autoCreate:true
,autoIndex:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log('error occured')
       console.log(err)
    }
    else{
        console.log("connection established")
    }
});