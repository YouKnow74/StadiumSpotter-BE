const {Album} = require("../models/Album")

exports.album_create_post = (req,res) => {
    console.log(req.body.album);
    let albmum = new Albmum(JSON.parse(req.body.album));
    if(req.file)
    album.image = req.file.filename;
    else
    album.image = "def-sport.webp";
    album.save()
    .then(() => {
      res.json({album})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
      })
}
exports.album_index_get = (req, res) => {
    Album.find().populate('library')
    .then((Album) => {
      // res.render("author/index", {authors, dayjs});
      res.json({ Album })
    })
    .catch((err) => {
      console.log(err);
    })
  
  }
exports.album_delete_get = (req, res) => {
    console.log(req.query._id);
    Album.findByIdAndDelete(req.query._id)
    .then((album) => {
      // res.redirect("/author/index");
      res.json({album})
    })
    .catch((err) => {
      console.log(err);
    })
  }