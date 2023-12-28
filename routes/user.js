const express = require("express")
const router = express.Router();

router.use(express.json());

//IMPORT user CONTROLLER
const userCtrl = require("../controllers/user");

//Routes
router.post("/signup",userCtrl.user_signup_post);
router.post("/signin",userCtrl.user_signin_post);
// router.get("/add",userCtrl.user_create_get);
// router.post("/add",userCtrl.user_create_post);
router.get("/index",userCtrl.user_index_get);
router.get("/detail",userCtrl.user_show_get);
router.get("/edit",userCtrl.user_edit_get);
router.delete("/delete",userCtrl.user_delete_get);
router.put("/update",userCtrl.user_update_put);

//export
module.exports = router;