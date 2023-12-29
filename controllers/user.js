//RESTFUL API's for regestration and authentcation 
const {User} =require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//number of rounds to do the hashing more number means more security
 const salt = 10;

exports.user_signup_post =(req ,res) => {
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
exports.user_signin_post = async (req, res) =>{
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
// exports.user_create_get=(req,res) =>{
//     res.render('user/add');
// }
// exports.user_create_post=(req,res)=>{
//     let user = new User(req.body);
//     user.save()
//     .then(()=>{
//         res.redirect('/user/index')
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// }
//get all useres in the system
exports.user_index_get=(req,res) =>{
    User.find()
    .then(alluser=>{
        res.json({alluser})
    })
    .catch(err=>{
        console.log(err);
    })
}
// render one user information in page
exports.user_show_get=(req,res) =>{
    User.findById(req.query.id)
    .then(userDetail=>{
        res.json({userDetail})
    })
    .catch(err=>{
        console.log(err);
    })
}
// render one user information to be edited in page
exports.user_edit_get=(req,res) =>{
    User.findById(req.query.id)
    .then(editUser=>{
        res.json({editUser})
    })
    .catch(err=>{
        console.log(err);
    })
}
//delete user
exports.user_delete_get=(req,res)=>{
    User.findByIdAndDelete(req.query.id)
    .then((userDeleted)=>{
        res.json({userDeleted});
    })
    .catch(err=>{
        console.log(err);
    })
}
// update user info
exports.user_update_put=(req,res)=>{
    console.log(req.body._id);
    // if there is an image upload
    if(req.file){
    req.body.avatar = "/images/"+req.file.filename;
    }
    User.findByIdAndUpdate(req.body._id,req.body)
    .then((userUpdate)=>{
        res.json({userUpdate});
    })
    .catch(err=>{
        console.log(err);
    })
}
