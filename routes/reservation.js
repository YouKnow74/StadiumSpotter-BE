const express = require('express');

const router = express.Router();
router.use(express.json());

const reservationCtrl = require('../controllers/reservation');
const isLoggedin = require('../config/isLoggedin');

//Routes

router.get("/add",isLoggedin, reservationCtrl.reservation_create_get)
router.post("/add",isLoggedin, reservationCtrl.reservation_create_post)
router.get("/index",isLoggedin, reservationCtrl.reservation_index_get)
router.delete("/delete",isLoggedin, reservationCtrl.reservation_delete_get)
router.get("/detail", reservationCtrl.reservation_show_get)
router.get("/stadiumOwner", reservationCtrl.reservation_stadium_get)
router.get("/edit",isLoggedin, reservationCtrl.reservation_edit_get)
router.put("/update",isLoggedin, reservationCtrl.reservation_update_post)
router.get("/reserved",reservationCtrl.reservation_reserved_get)






module.exports = router;