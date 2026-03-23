//23-03-2026
const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController")

router.get("/",authController.getToken);

module.exports = router;
