const jwt=require("jsonwebtoken");
const User=require("../models/userModel");

module.exports=async(req,res,next)=>{
    const token=req.cookies.token || req.header("Authorization")?.replace("Bearer ","");
    if(!token){
        return res.redirect("/login");
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
        res.clearCookie("token");
        res.redirect("/login");
    }
};