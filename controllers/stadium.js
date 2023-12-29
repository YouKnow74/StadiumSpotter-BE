const {Stadium} = require("../models/Stadium")
const { Facility } = require("../models/Facilities")
const {Sport} = require("../models/Sport")

exports.stadium_create_post = (req, res) => {
    console.log(req.body)
    let stadium = new Stadium(req.body)
    stadium.save()
    .then((stadiumData) => {
        // req.body.facilities.forEach(facility => {
        //     Facility.findById(facility)
        //     .then((facility) => {
        //         facility.stadium.push(stadium)
        //         facility.save();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // })
        res.json({stadiumData})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_index_get = (req, res) => {
    Stadium.find().populate('facilities').populate("category")
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_delete_get = (req, res) => {
    console.log(req.query.id);
    Stadium.findByIdAndDelete(req.query.id)
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_edit_get = (req, res) => {
    Stadium.findById(req.query.id).populate('facilities').populate("category")
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_update_put = (req, res) => {
    Stadium.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_create_get =(req,res)=>{
    Sport.find()
    .then((sports)=>{
        res.json({sports})
    })
    .catch(err=>{
        console.log("error bringing list of sports");
        console.log(err);
    })

}