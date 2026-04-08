// const users = require("../modules/usermodules")

// exports.getuser = (req,res)=>{
//     res.json(users)   
// }

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



    //16-03-2026

    // const user = require("../modules/usermodules");

    // exports.getuser = (req,res)=>{
    //     res.json(user);
    // };

    // exports.getUserById = (req,res)=>{
    //     const userId = req.params.id;
    //     const userQueryId = req.query.id;
    //     console.log("userQuery",userQueryId);
    //     const headers = req.headers;
    //     console.log("headers",headers);
    //     let user={};
    //     user.map((userMeta)=>{
    //         const id = userMeta.id;
    //         if(id == userId){

    //         }
    //     })
        


    // }

    // exports.adduser = (req,res)=>{
    //     const students = req.body;
    //     console.log("students",students);
    //     res.json({
    //         messege:"Student added",
    //         students,
    //     })
    // }

    // //18-03-2026
    // exports.getUserById = (req,res)=>{
    //     const{name} = req.query;
    //     const{department,section} = req.params;
    //     console.log("name",name);
    //     console.log("Dep:",department)
    //     console.log("Sec:",section);
        
        
    // }
    //8-4-26

    const UserModel = require("../modules/usersmodule")
    exports.getUsers = async (req,res)=>{
        const users = await UserModel.find({});
        res.json(users);
    };


exports.getUserById = async(req,res)=>{
    const {id} = req.params;
    const user = await UserModel.findOne({_id:Number(id)});
    res.json(user);
};

// insertOne({}) => create({})
// insertMany({}) => insertMany([])