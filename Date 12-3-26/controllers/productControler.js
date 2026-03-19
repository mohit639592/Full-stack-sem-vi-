//18-3-26
const product = require("../modules/productModule");
exports.getProducts = (req,res)=>{
    res.json(product);
}