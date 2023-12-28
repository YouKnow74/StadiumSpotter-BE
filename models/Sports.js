const mongoose = require('mongoose');

const SportsSchema = mongoose.Schema({
    category: String,
    stadium: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Studium'
    }],
  }, {
    timestamps: true
  });
  
  // Creating Model
  const Sport = mongoose.model("Sport", SportsSchema);
  
  // Export
  module.exports = {Sport};