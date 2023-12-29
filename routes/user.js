const express = require("express")
const router = express.Router();

router.use(express.json());

//IMPORT AUTH CONTROLLER
const userCtrl = require("../controllers/user");

//Routes
router.post("/signup",userCtrl.user_signup_post);
router.post("/signin",userCtrl.user_signin_post);

//export
module.exports = router;