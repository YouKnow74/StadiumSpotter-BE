const express = require('express');

const router = express.Router();
router.use(express.json());

const stadiumCtrl = require("../controllers/stadium");

//Multer 
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
  })
  
  const upload = multer({ storage: storage })

//Routes
router.get("/add",stadiumCtrl.stadium_create_get);
router.post("/add",stadiumCtrl.stadium_create_post);
router.get("/index",stadiumCtrl.stadium_index_get);
// router.get("/detail",stadiumCtrl.stadium_show_get);
router.delete("/delete",stadiumCtrl.stadium_delete_get);
router.get("/edit",stadiumCtrl.stadium_edit_get);
router.put("/update",stadiumCtrl.stadium_update_put);



module.exports = router;