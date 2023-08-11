const User = require('../models/userModel');

//register
exports.register=async(req,res)=>{
    try {
        const { username, email, password} = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User Already exists"
            })
        }
        user = await User.findOne({username});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User Already exists"
            })
        }
       
        user = await User.create({
            username,
            email,
            password
        })

        res.status(201).json(user)

        
    } catch (error) {
        return res.json(error)
    }
}

//Login
exports.login=async(req,res)=>{
    try {
        const { email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User Doesn't exists"
            })
        }
        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Incorrect Password",
            })
        }


        res.status(200).json(user)

        
    } catch (error) {
        return res.json(error)
    }
}
