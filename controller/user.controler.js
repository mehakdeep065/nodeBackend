const user =require('../models/user.models')

//jwt 
const jwt = require('jsonwebtoken');
const JWT_SECRET ='your_jwt_secret';
// const usersignup = async(req,res)=>{
//     try{
//         const{name,email,password}=req.body;
//         const 
//     }
// }


//signup 
const userSignup= async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const existUser=await user.findOne({email:email});
        if(existUser){
            res.send('email exist already');
        }
        const newUser= new user({
            name,
            email,
            password
        })
        const responceData= await newUser.save();
        res.status(200).json({message:responceData })

       
    } catch (err) {
        console.log(err);
        
    }
}

//  login 
    const userlogin= async(req,res)=>{
        try {
            const {email,password}=req.body;
            const existUser=await user.findOne({email:email, password:password});

            if(!existUser){
                return res.status(400).json({message:"Email is not registered"})
            }
            if(existUser.password !== password){
                return res.status(400).json({message:"Password is incorrect."})
            }
            // Genrate JWT access token
            const token = jwt.sign(
                { userId: existUser._id, email:existUser.email }, //payload or data where you want to assign key
                JWT_SECRET, //key just variable
                { expiresIn: '1h'} //options or expiry 
            );
          
            //Genrate refersh token
 
            res.status(200).json({
                message:'Login successful',
                token:token
            });

           
        } catch (err) {
            console.log(err);
            
        }
};
module.exports={userSignup , userlogin};