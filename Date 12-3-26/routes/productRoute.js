//19-03-2026
const express = require("express");
const router = express.Router();

const productControler = require("../controllers/productControler")

router.get("/product",productControler.getProducts);
router.post("/product",productControler.addProducts);

module.exports = router;
