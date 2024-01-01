const jwt =require("jsonwebtoken");
const {User} =require('../models/User');

require("dotenv").config();

module.exports= (req,res,next)=>{

    let token ="";
    let authorizationToken=req.header("Authorization");

    console.log(authorizationToken);
    if(authorizationToken){
        token=authorizationToken.replace("Bearer ","");
        console.log(token);
    }
    if(!token){
        return res.status(401).json({"message":"You Are Not allowed to Continue"});
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET);

        req.user = decoded.user;
        console.log(req.user);
        User.findById(req.user.id)
        .then(userInfo=>{
            console.log(userInfo.userName);
            if (userInfo.role =="renter" || userInfo.role=="admin") {
                console.log("User Role"+userInfo.role+"\nValid");
                next();
            }
            else{
                console.log("User Role"+userInfo.role+"\nNot Valid");
            }
        })
        .catch(err=>{
            console.log(err);
            return res.status(404).json({ message: 'User not found' });
        })
        
        
    } catch (error) {
        return res.status(401).json({"message":"Invalid Token"})
    }
}