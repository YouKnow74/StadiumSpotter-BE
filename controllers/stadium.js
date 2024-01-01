const {Stadium} = require("../models/Stadium")
const { Facility } = require("../models/Facilities")
const {Sport} = require("../models/Sport")

exports.stadium_create_post = (req, res) => {
    // stadium dat is json string in FE must convert to object here
    console.log(JSON.parse(req.body.stadium)) 
    console.log("Hello?");
    // console.log(req.body.image.name);
    console.log(req.file);
    let stadium = new Stadium(JSON.parse(req.body.stadium));
    if(req.file)
    stadium.image = req.file.filename;
    else
    stadium.image = "def-stadium.jpg";
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
    console.log("reqbody",req.body.stadium);
    const data = JSON.parse(req.body.stadium)
    if(req.file)
    data.image = req.file.filename;
    else
    data.image = data.image;
    Stadium.findByIdAndUpdate(data._id, data, {new: true})
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