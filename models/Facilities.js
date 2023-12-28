const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema({
    facility: String,
    image: String
},{
    timestamps: true
})

const Facility = mongoose.model("Facility", facilitySchema);

module.exports = {Facility};