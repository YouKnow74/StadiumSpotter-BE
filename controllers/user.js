//RESTFUL API's for regestration and authentcation 
const User =require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//number of rounds to do the hashing more number means more security
 const salt = 10;

exports.auth_signup_post =(req ,res) => {
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password , salt);
    console.log(hash);

    user.password = hash;

    user.save()
    .then(() => {
        res.json({"message":"User Created Succssefully"})
    })
    .catch((err) =>{
        res.json({"message": err.message })
    })
}
exports.auth_signin_post = async (req, res) =>{
    let {emailAddress , password} = req.body;
    console.log(emailAddress);
    try{
        let user = await User.findOne({emailAddress});
        console.log(user);

        if(!user)
        {
            return res.json({"message":"User not found"}).status(400);

        }
        //password compration 
        const isMatched = await bcrypt.compareSync(password,user.password);
        console.log(password);
        console.log(user.password);
        if(!isMatched){
            return res.json ({message:"Password not matched"}).status(400);

        }
        //generate jwt
        const payload = {
            user:{
                id:user._id
            }
        }
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn:3600000},
            (err, token) => {
                if (err) throw err ;
                res.json({token}).status(200)
            }
        )

    }
    catch(err){
        console.log(err);
        res.json({"message": "You are not loggedIn!!!"}).status(400);
      }
}
