const mongoose = require("mongoose");

const db = async()=>{
    await mongoose
    .connect("mongodb://localhost:27017/user")
    .then(()=>console.log("Connetectd to DB"))
    .catch((err)=> console.log(err));
};
module.exports = db;










