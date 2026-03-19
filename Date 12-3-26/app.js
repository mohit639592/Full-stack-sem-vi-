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
const userRoutes = require("./routes/userroutes");
const productRoutes = require("./routes/productRoute")

app.use("/admin",productRoutes)
app.use("/",userRoutes);
module.exports = app;
