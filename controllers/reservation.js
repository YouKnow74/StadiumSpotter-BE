const {Reservation} = require("../models/Reservation");
const {Library} =require("../models/Library");
const dayjs = require('dayjs');

exports.reservation_create_get = (req, res) => {
    Library.findById(req.query.id)
    .then((library) => {
        // library.dateFormatted = dayjs(library.date).format("yyyy-MM-dd")
        res.json({library})
    })
    .catch(err => console.log(err))
}

exports.reservation_create_post = (req, res) => {
    console.log(req.body);
    let reservation = new Reservation(req.body)

    reservation.save()
    .then((reservation) => {
        Library.findById(req.body.library)
        .then(library=>{
            console.log("caught library");
            console.log(res);
            res.json({reservation,library})
        })
        .catch(err=>{
            console.log("error bringing library");
            console.log(err);
        })
       
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_index_get = (req, res) => {
    Reservation.find().populate("user").populate("library")
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_show_get = (req, res) => {
    Reservation.find({user: req.query.id})
    .then((reservstions) => {
        res.json({reservstions})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_library_get =(req, res) => {
    Library.find({user: req.query.id})
    .then(library => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_delete_get = (req, res) => {
    console.log(req.query.id);
    Reservation.findByIdAndDelete(req.query.id)
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_edit_get = (req, res) => {
    Reservation.findById(req.query.id)
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
    .then((reservation) => {
        res.json({reservation})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_reserved_get = (req,res)=>{
    Reservation.find({library:req.query.id})
    .then(reserved=>{
        res.json({reserved})
    })
    .catch(err=>{
        console.log("error fetching list of reserved");
        console.log(err);
    })

}