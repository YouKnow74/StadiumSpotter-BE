const express = require('express');

const router = express.Router();
router.use(express.json());

const stadiumCtrl = require("../controllers/stadium");

//Routes
// router.get("/add",stadiumCtrl.stadium_create_get);
router.post("/add",stadiumCtrl.stadium_create_post);
router.get("/index",stadiumCtrl.stadium_index_get);
// router.get("/detail",stadiumCtrl.stadium_show_get);
router.delete("/delete",stadiumCtrl.stadium_delete_get);
router.get("/edit",stadiumCtrl.stadium_edit_get);
router.put("/update",stadiumCtrl.stadium_update_put);



module.exports = router;