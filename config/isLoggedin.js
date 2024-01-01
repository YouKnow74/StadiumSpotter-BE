const jwt =require("jsonwebtoken");

require("dotenv").config();

module.exports=(req,res,next)=>{

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
        next();
        
    } catch (error) {
        return res.status(401).json({"message":"Invalid Token"})
    }
}