const express = require('express');

const router = express.Router();
router.use(express.json());


const facilityCtrl = require ("../controllers/facilities");

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
router.post("/add",upload.single('image'),facilityCtrl.facility_create_post);
router.get("/index",facilityCtrl.facility_index_get);
// router.get("/detail",facilityCtrl.facility_show_get);
router.delete("/delete",facilityCtrl.facility_delete_get);
router.get("/edit",facilityCtrl.facility_edit_get);
router.put("/update",upload.single('image'),facilityCtrl.facility_update_put);


module.exports = router;