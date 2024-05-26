const userModels = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

// Create a token for the user
const createToken = (_id) => {
    const jwkey = process.env.JWT_KEY;
    return jwt.sign({ _id }, jwkey, {
        expiresIn: '7d',
    });
};

const registerUser = async(req, res) => {
 try{
    const { username, email, password } = req.body;
   let user = await userModels.findOne({ email});
   if(user) return res.status(400).json("User already exists");
   if(username=="" || email=="" || password==""){
       return res.status(400).json("Please fill all the fields");
   }
    if(!validator.isEmail(email)){
         return res.status(400).json("Please enter a valid email");
    }
    if(!validator.isStrongPassword(password)){
        return res.status(400).json("Password is not strong enough");
    }
    user = new userModels({
        username,
        email,
        password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = createToken(user._id);
    res.status(200).json({_id: user._id, username: user.username, email: user.email, token})
 

    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
   

};

const loginUser = async(req, res) => {
    try{
        const { email, password } = req.body;
        let user = await userModels.findOne({ email});
        if(!user) return res.status(400).json("Email or password is incorrect");
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).json("Email or password is incorrect");
        const token = createToken(user._id);
        res.status(200).json({_id: user._id, username: user.username, email: user.email, token});


    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error");

    }
};

const getUser = async(req, res) => {
    try{
        const userid=req.params.userId;
        const user = await userModels.findById(userid);
        if(!user) return res.status(404).json("User not found");
        res.status(200).json(user);

    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
   

};
const getAllUsers = async(req, res) => {
    try{
        const users = await userModels.find();
        res.status(200).json(users);

    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error");
    }

};
module.exports = {registerUser, loginUser, getUser, getAllUsers};