const mongoose = require("mongoose");
//always start with capital latter

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    _id:Number,
    age:Number,
    course:String,
    skills:[String],
    address:{
        city:String,
        pinCode:String,
    },
    isActive:Boolean,
    marks:[
        {
            subject:String,
            Score:Number,
        },
    ]
})
const User = mongoose.model("User",userSchema,"user")
//we give user it will act like users   

module.exports = User
