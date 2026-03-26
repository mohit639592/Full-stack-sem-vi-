const express = require("express");
const userroutes=require("./routes/userroutes")
const productRoute=require("./routes/productRoute")
const authRoutes = require("./routes/authRoutes")

const  app = require("./app")
// app.get("/",(req,res)=>{
//     res.json({
//         messege:"Serveer done",
//         status:200,
//     });
// })

// app.get("/home",(req,res)=>{
//     res.json({
//         messege:"Home page",
//         status:200,
//     });
// })

// app.listen(3000,()=>{
//     console.log("SERVER RUNNIN ON 3000");
// })

// app.get("/users",(req,res)=>{
//     const getuser = require("./modules/usermodules");
//     res.json({
//         messege:"User page",
//         getuser,
//     })
// })

//app.use("/",userroutes)

//app.use("/admin",productRoute)
app.listen(3000,()=>{
    console.log("SERVER RUNNIN ON 3000");
})
//app.use("/login",authRoutes)
// app.get("/home/:uid",(req,res)=>{
//     const clientid=req.params.uid;
//     res.json({
//         messege:"Home page",
//         status:200,
//         clientid:clientid,
//     });
// })