// import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7 days"
    })
    
    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict", // csrf attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"// only works on https
    })
};

export default generateTokenAndSetCookie;