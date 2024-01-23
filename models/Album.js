const mongoose = require('mongoose');

const AlbumsSchema = mongoose.Schema({
    category: String,
    image: String,
    album: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Library'
    }],
  }, {
    timestamps: true
  });
  
  // Creating Model
  const Album = mongoose.model("Album", AlbumsSchema);
  
  // Export
  module.exports = {Album};