const {Facility} = require("../models/Facilities")

exports.facility_create_post = (req, res) => {
    console.log(req.body)
    let facility = new Facility(req.body)

    facility.save()
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => {
        console.log(err);
        console.log("Please try again later!");
    })
}

exports.facility_index_get = (req, res) => {
    Facility.find()
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => console.log(err))
}

exports.facility_delete_get = (req, res) => {
    console.log(req.query.id);
    Facility.findByIdAndDelete(req.query.id)
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => console.log(err))
}

exports.facility_edit_get = (req, res) => {
    // console.log(req.query.id);
    Facility.findById(req.query.id)
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => console.log(err))
}

exports.facility_update_post = (req, res) => {
    console.log(req.body.id);
    Facility.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => console.log(err))
}

