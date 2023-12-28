const {Stadium} = require("../models/Stadium")
const { Facility } = require("../models/Facilities")

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
    Stadium.find()
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
    Stadium.findById(req.query.id)
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.stadium_update_put = (req, res) => {
    Stadium.findByIdAndUpdate(req.body._id, req.bod, {new: true})
    .then((stadium) => {
        res.json({stadium})
    })
    .catch(err => {
        console.log(err);
    })
}