const express = require('express');

const router = express.Router();
router.use(express.json());

const reservationCtrl = require('../controllers/reservation');

//Routes
router.post("/add", reservationCtrl.reservation_create_post)
router.get("/index", reservationCtrl.reservation_index_get)
router.delete("/delete", reservationCtrl.reservation_delete_get)
router.get("/edit", reservationCtrl.reservation_edit_get)
router.put("/update", reservationCtrl.reservation_update_post)









module.exports = router;