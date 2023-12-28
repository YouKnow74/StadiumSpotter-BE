const mongoose = require("mongoose") 

const userSchema = mongoose.Schema({
 firstName:{
    type:String,
    required:true
 },
 lastName:{
    type:String,
    required:true
 },
 userName:{
    type:String,
    required:true
 },
 emailAddress:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
 },
 phoneNumber:{
    type:String,
    required:true
 },
 role:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true,
    minlength:[6 , "Your Password is too weak!!!"]
 }
},
{
timestamps:true
}
);

const User = mongoose.model("User"  , userSchema)

module.exports = User;
