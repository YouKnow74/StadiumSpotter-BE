const {Reservation} = require("../models/Reservation")

exports.reservation_create_post = (req, res) => {
    console.log(req.body);
    let reservation = new Reservation(req.body)

    reservation.save()
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_index_get = (req, res) => {
    Reservation.find()
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_delete_get = (req, res) => {
    console.log(req.query.id);
    Reservation.findByIdAndDelete(req.query.id)
    reservation.save()
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_edit_get = (req, res) => {
    Reservation.findById(req.query.id)
    reservation.save()
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_update_post = (req, res) => {
    console.log(req.body._id);
    Reservation.findByIdAndUpdate(req.body._id, req.body, {new: true})
    reservation.save()
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}