const mongoose = require("mongoose")

const reservationSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    Status: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    stadium: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stadium'
    }
},{
    timestamps: true
})

const Reservation = mongoose.model("Reservation", reservationSchema)

module.exports = {Reservation}