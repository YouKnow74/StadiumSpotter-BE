const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
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

const Library = mongoose.model("library", librarySchema, 'library')

module.exports = {Library}