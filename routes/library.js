const express = require('express');

const router = express.Router();
router.use(express.json());

const isLoggedin=require('../config/isLoggedin');
const isCustomer = require('../config/isCustomer');
const isAdmin = require('../config/isAdmin');


const libraryCtrl = require("../controllers/library");

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


//Routes


router.get("/index", isLoggedin, libraryCtrl.library_index_get);
router.get("/detail", libraryCtrl.library_show_get); // Changed from "library_show_get" to "library_detail_get"
router.post("/add", isLoggedin, libraryCtrl.library_create_post);


module.exports = router;