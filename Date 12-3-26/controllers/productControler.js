//18-3-26
const product = require("../modules/productModule");
exports.getProducts = (req,res)=>{
    res.json(product);
}

exports.addProducts = (req,res)=>{
    const product = req.body;
    console.log("product",product);
    res.json({
        messege:"Product added",
        product,
    });
};