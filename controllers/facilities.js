const {Facility} = require("../models/Facilities")

exports.facility_create_post = (req, res) => {
    console.log(req.file);
    console.log(req.body.facility);
    let facility = new Facility(JSON.parse(req.body.facility));

    if(req.file)
    facility.image = req.file.filename
    else
    facility.image = "def-facility.webp";

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

exports.facility_update_put = (req, res) => {

    console.log(req.body.facility._id);
    const data = JSON.parse(req.body.facility);
    if(req.file)
    data.image = req.file.filename;
    else
    data.image = data.image;

    Facility.findByIdAndUpdate(data._id, data, {new: true})
    .then((facility) => {
        res.json({facility})
    })
    .catch(err => console.log(err))
}

