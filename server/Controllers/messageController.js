const messageModel = require('../Models/messageModel');

const createMessage = async (req, res) => {
    try{
        const {chatID, senderID, message} = req.body;
        const newMessage = new messageModel({
            chatID,
            senderID,
            message
        });
        const response = await newMessage.save();
        res.status(200).json(response);

    }
   catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
};

const getMessages = async (req, res) => {
    try{
        const {chatID} = req.params;
        const message= await messageModel.find({chatID});
        if(!message){
            return res.status(404).json("No messages found");
        }
        res.status(200).json(message);
        

    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
};

module.exports = {createMessage, getMessages};