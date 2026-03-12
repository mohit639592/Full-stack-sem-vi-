const  express = require("express");
const router = express.Router();

const usercontroler = require("../controllers/usercontroler")

router.get("/users",usercontroler.getuser)
// router.get("/users/:id",usercontroler.getuserByid);

module.exports = router;