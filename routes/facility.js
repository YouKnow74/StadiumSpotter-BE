const express = require('express');

const router = express.Router();
router.use(express.json());


const facilityCtrl = require ("../controllers/facilities");

//Routes
router.post("/add",facilityCtrl.facility_create_post);
router.get("/index",facilityCtrl.facility_index_get);
// router.get("/detail",facilityCtrl.facility_show_get);
router.delete("/delete",facilityCtrl.facility_delete_get);
router.get("/edit",facilityCtrl.facility_edit_get);
router.put("/update",facilityCtrl.facility_update_put);


module.exports = router;