const users = require("../modules/usermodules")

exports.getuser = (req,res)=>{
    res.json(users)   
}

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
    
    
    
    // app.get("/home/:uid",(req,res)=>{
    //     const clientid=req.params.uid;
    //     res.json({
    //         messege:"Home page",
    //         status:200,
    //         clientid:clientid,
    //     });
    // })