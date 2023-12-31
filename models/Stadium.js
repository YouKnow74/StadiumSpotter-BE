const mongoose = require("mongoose");

const stadiumSchema = mongoose.Schema({
    name: String,
    image:String,
    descriptin: String,
    size: String,
    location: String,
    price:Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Facility"
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sport"
    }
},{
    timestamps: true
})

const Stadium = mongoose.model("Stadium", stadiumSchema, 'stadium')

module.exports = {Stadium}