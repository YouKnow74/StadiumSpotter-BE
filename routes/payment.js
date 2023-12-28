const express = require("express")
const router = express.Router();

router.use(express.json());

const paymentCtrl = require('../controllers/payment');

//Routes

router.get("/index",paymentCtrl.payment_index_get);
router.post("/add",paymentCtrl.payment_create_post);
router.get("/edit",paymentCtrl.payment_edit_get);
router.put("/update",paymentCtrl.payment_update_put);
router.get("/detail",paymentCtrl.payment_show_get);

module.exports = router;