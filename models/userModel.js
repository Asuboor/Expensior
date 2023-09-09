const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    password:{
      type:String,
      required:true
    },
  },
  { timestamp: true }
);

const userModel=mongoose.model('candidate',userSchema)

module.exports=userModel