const express = require("express")
const router = express.Router();

router.use(express.json());

const isLoggedin = require("../config/isLoggedin");
const isAdmin = require("../config/isAdmin");

//Multer 
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + "."+extension);
    }
  })
  
  const upload = multer({ storage: storage })

//IMPORT user CONTROLLER
const userCtrl = require("../controllers/user");

//Routes
router.post("/signup",upload.single('image'),userCtrl.user_signup_post);
router.post("/signin",userCtrl.user_signin_post);
// router.get("/add",userCtrl.user_create_get);
// router.post("/add",userCtrl.user_create_post);
router.get("/index",isAdmin,userCtrl.user_index_get);
router.get("/detail",isLoggedin,userCtrl.user_show_get);
router.get("/edit",isLoggedin,userCtrl.user_edit_get);
router.delete("/delete",isAdmin,userCtrl.user_delete_get);
router.put("/update",upload.single('image'),isLoggedin,userCtrl.user_update_put);

//export
module.exports = router;