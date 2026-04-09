const  express = require("express");
const router = express.Router();

const usercontroler = require("../controllers/usercontroler")

// router.get("/get/users",usercontroler.getuser)
// router.get("/users/:id",usercontroler.getuserByid);

//wrong way because get ( Action )are in route

// router.get("/get/users",usercontroler.getuser)
// router.get("/get/users/:id",usercontroler.getUserById)
// router.post("/add/users",usercontroler.addUser)
// module.exports = router;

//18-03-26

//Right way
router.get("/users",usercontroler.getUsers)
router.get("/users/get/:id/:isActive",usercontroler.getUserById)
router.post("/users/add",usercontroler.addUser)
// router.get("/users/:department/:section",usercontroler.getUserById)
// router.post("/users",usercontroler.adduser)
module.exports = router;

//http://localhost:3000/users/cse/M?name=sample

