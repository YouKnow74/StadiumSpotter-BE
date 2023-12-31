const {Sport} = require("../models/Sport")

exports.sport_create_post = (req,res) => {
    console.log(req.body.sport);
    let sport = new Sport(JSON.parse(req.body.sport));
    if(req.file)
    sport.image = req.file.filename;
    else
    sport.image = "def-sport.webp";
    sport.save()
    .then(() => {
      res.json({sport})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
      })
}
exports.sport_index_get = (req, res) => {
    Sport.find().populate('stadium')
    .then((Sports) => {
      // res.render("author/index", {authors, dayjs});
      res.json({ Sports })
    })
    .catch((err) => {
      console.log(err);
    })
  
  }
exports.sport_delete_get = (req, res) => {
    console.log(req.query._id);
    Sport.findByIdAndDelete(req.query._id)
    .then((sport) => {
      // res.redirect("/author/index");
      res.json({sport})
    })
    .catch((err) => {
      console.log(err);
    })
  }