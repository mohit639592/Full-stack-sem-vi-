const  express = require("express");
const router = express.Router();

const usercontroler = require("../controllers/usercontroler")

router.get("/get/users",usercontroler.getuser)
// router.get("/users/:id",usercontroler.getuserByid);
router.get("/get/users",usercontroler.getuser)
router.get("/get/users/:id",usercontroler.getUserById)
router.post("/add/users",usercontroler.addUser)
module.exports = router;