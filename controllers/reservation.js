const {Reservation} = require("../models/Reservation");
const {Stadium} =require("../models/Stadium");
const dayjs = require('dayjs');

exports.reservation_create_get = (req, res) => {
    Stadium.findById(req.query.id)
    .then((stadium) => {
        // stadium.dateFormatted = dayjs(stadium.date).format("yyyy-MM-dd")
        res.json({stadium})
    })
    .catch(err => console.log(err))
}

exports.reservation_create_post = (req, res) => {
    console.log(req.body);
    let reservation = new Reservation(req.body)

    reservation.save()
    .then((reservation) => {
        Stadium.findById(req.body.stadium)
        .then(stadium=>{
            console.log("caught stadium");
            console.log(res);
            res.json({reservation,stadium})
        })
        .catch(err=>{
            console.log("error bringing stadium");
            console.log(err);
        })
       
    })
    .catch(err => {
        console.log(err);
    })
}

exports.reservation_index_get = (req, res) => {
    Reservation.find().populate("user").populate("stadium")
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

exports.reservation_stadium_get =(req, res) => {
    Stadium.find({user: req.query.id})
    .then(stadium => {
        res.json({stadium})
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
    Reservation.find({stadium:req.query.id}).populate("user")
    .then(reserved=>{
        res.json({reserved})
    })
    .catch(err=>{
        console.log("error fetching list of reserved");
        console.log(err);
    })

}