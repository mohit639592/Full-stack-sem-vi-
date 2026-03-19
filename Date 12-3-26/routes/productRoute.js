const express = require("express");
const router = express.Router();

const productControler = require("../controllers/productControler")

router.get("/product",productControler.getProducts);