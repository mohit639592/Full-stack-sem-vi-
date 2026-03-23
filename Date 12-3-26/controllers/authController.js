//23-3-26
const jwt = require("jsonwebtoken")
require("dotenv").config()

const jwtToken = process.env.jwtToken;


exports.getToken =(req,res)=>{
    const {userName,email} = req.query;
    const token = jwt.sign({userName,email},jwtToken)
    res.json({token});
}