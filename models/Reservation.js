const mongoose = require("mongoose")

const reservationSchema = mongoose.Schema({
    date: Date,
    startTime: String,
    endTime: String,
    Status: String,
    price: Number,
    user: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'User'
    },
    stadium: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'Stadium'
    }
},{
    timestamps: true
})

const Reservetion = mongoose.model("Reservation", reservationSchema)

module.exports = {Reservetion}