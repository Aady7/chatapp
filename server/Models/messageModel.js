const mongoose=require('mongoose');

const messageSchema = new mongoose.Schema({
    chatID: {
        type: String,
        required: true
    },
    senderID: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    }

);

const messageModel= mongoose.model('message', messageSchema);
module.exports = messageModel;