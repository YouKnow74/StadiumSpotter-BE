const express = require('express');

const router = express.Router();
router.use(express.json());

const sportCtrl = require("../controllers/sport")

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

router.post("/add",sportCtrl.sport_create_post);
router.get("/index",sportCtrl.sport_index_get);
router.delete("/delete",sportCtrl.sport_delete_get);



module.exports = router;