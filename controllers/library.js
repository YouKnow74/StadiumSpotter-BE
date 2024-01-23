const {Library} = require("../models/Library")
const { Community } = require("../models/Communities")
const {Album} = require("../models/Album")
const {User} = require("../models/User")

exports.library_create_post = (req, res) => {
    // stadium dat is json string in FE must convert to object here
    console.log(JSON.parse(req.body.library)) 
    console.log("Hello?");
    // console.log(req.body.image.name);
    console.log(req.file);
    let library = new Library(JSON.parse(req.body.library));
    if(req.file)
    library.image = req.file.filename;
    else
    library.image = "def-stadium.jpg";
    library.save()
    .then((libraryData) => {
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
        res.json({libraryData})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_index_get = (req, res) => {
    Library.find().populate('communities').populate("category")
    .then((library) => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_delete_get = (req, res) => {
    console.log(req.query.id);
    Library.findByIdAndDelete(req.query.id)
    .then((library) => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_show_get = (req, res) => {
    Library.find({user: req.query.id}).populate('communities').populate("category")
    .then(library => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_edit_get = (req, res) => {
    library.findById(req.query.id).populate('communities').populate("category")
    .then((library) => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_update_put = (req, res) => {
    console.log("reqbody",req.body.library);
    const data = JSON.parse(req.body.library)
    if(req.file)
    data.image = req.file.filename;
    else
    data.image = data.image;
    Library.findByIdAndUpdate(data._id, data, {new: true})
    .then((library) => {
        res.json({library})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.library_create_get =(req,res)=>{
    Sport.find()
    .then((sports)=>{
        res.json({sports})
    })
    .catch(err=>{
        console.log("error bringing list of albums");
        console.log(err);
    })

}

