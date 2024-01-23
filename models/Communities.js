const mongoose = require("mongoose");

const communitySchema = mongoose.Schema({
    community: String,
    image: String
},{
    timestamps: true
})

const Community = mongoose.model("Community", communitySchema);

module.exports = {Community};