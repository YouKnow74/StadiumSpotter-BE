const {Community} = require("../models/Communities")

exports.community_create_post = (req, res) => {
    console.log(req.file);
    console.log(req.body.community);
    let community = new Community(JSON.parse(req.body.community));

    if(req.file)
    community.image = req.file.filename
    else
    community.image = "def-facility.webp";

    community.save()
    .then((community) => {
        res.json({community})
    })
    .catch(err => {
        console.log(err);
        console.log("Please try again later!");
    })
}

exports.community_index_get = (req, res) => {
    Community.find()
    .then((community) => {
        res.json({community})
    })
    .catch(err => console.log(err))
}

exports.community_delete_get = (req, res) => {
    console.log(req.query.id);
    Community.findByIdAndDelete(req.query.id)
    .then((community) => {
        res.json({community})
    })
    .catch(err => console.log(err))
}

exports.community_edit_get = (req, res) => {
    // console.log(req.query.id);
    Community.findById(req.query.id)
    .then((community) => {
        res.json({community})
    })
    .catch(err => console.log(err))
}

exports.community_update_put = (req, res) => {

    console.log(req.body.community._id);
    const data = JSON.parse(req.body.community);
    if(req.file)
    data.image = req.file.filename;
    else
    data.image = data.image;

    Community.findByIdAndUpdate(data._id, data, {new: true})
    .then((community) => {
        res.json({community})
    })
    .catch(err => console.log(err))
}

