const mongoose = require("mongoose")

const reservationSchema = mongoose.Schema({
    date: Date,
    startTime: String,
    endTime: String,
    Status: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }
},{
    timestamps: true
})

const Reservation = mongoose.model("Reservation", reservationSchema)

module.exports = {Reservation}