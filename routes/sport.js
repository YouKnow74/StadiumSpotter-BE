const express = require('express');

const router = express.Router();
router.use(express.json());

const sportCtrl = require("../controllers/sport")

router.post("/add",sportCtrl.sport_create_post);
router.get("/index",sportCtrl.sport_index_get);
router.delete("/delete",sportCtrl.sport_delete_get);



module.exports = router;