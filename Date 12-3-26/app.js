const express = require("express");

const app = express();

// app.use(express.json());

// app.get('/home',(req,res)=>{
//     res.send("Home Page");
// });

// const userRoutes = require("./routes/userroutes");
// const productRoutes = require("./routes/productRoute")

//middleware
const customerMiddleWare = (req,res,next)=>{

    //logic goes here
    console.log(req?.query?.skip);
    if(req?.query.skip == "true"){
        return next();
    }
    else{
        res.send("Access Denied");
    }
    


    //if failure case
    //res.send("consition failes")




    //if success
    //next()
}
app.use(customerMiddleWare)
app.use(express.json());

app.get('/home',(req,res)=>{
    res.send("Home Page");
});

const authMiddleware = (req,res,next)=>{
    const token = req.header.authorization?.split(" ")[1]
    console.log(token);
    if(!token){
        res.send("Token Not Found");
    }
    
}
const userRoutes = require("./routes/userroutes");
const productRoutes = require("./routes/productRoute")
const authController = require("./routes/authRoutes")

app.use("/admin",productRoutes)
app.use("/",userRoutes);
// app.use("/login",authController);
module.exports = app;
