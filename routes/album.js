const express = require('express');

const router = express.Router();
router.use(express.json());

const albumCtrl = require("../controllers/album");

const isLoggedin=require('../config/isLoggedin');
const isCustomer = require('../config/isCustomer');
const isAdmin = require('../config/isAdmin');

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
      cb(null, file.fieldname + '-' + uniqueSuffix +"."+ extension);
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/add",isAdmin,upload.single('image'),albumCtrl.album_create_post);
router.get("/index",albumCtrl.album_index_get);
router.delete("/delete",isAdmin,albumCtrl.album_delete_get);



module.exports = router;