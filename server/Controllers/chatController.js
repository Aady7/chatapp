const chatModel= require('../Models/chatModel')

const createChat=async(req, res)=>{
    try{
        const{ firstID, secondID }=req.body;
        let chat=await chatModel.findOne({members:{$all:[firstID, secondID]}});
        if(chat){
            return res.status(200).json(chat);
        }
        else{
            chat= new chatModel({
                members:[firstID, secondID]
            })
           const response= await chat.save();
           res.status(200).json(response);

        }


    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error")
    }

}

const findUserChats=async(req, res)=>{
    try{
        const{userID}=req.params.userID;
        const chats=await chatModel.find({members:{ $in: [userID] }});
        if(!chats){
            return res.status(404).json("No chats found");
        }
        res.status(200).json(chats);    
   }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error")
    }

}

const findChat=async(req, res)=>{
    try{
        const{firstID, secondID}=req.body;
        const chat=await chatModel.findOne({members:{$all:[firstID, secondID]}});
        if(!chat){
            return res.status(404).json("Chat not found");
        
        }
        res.status(200).json(chat);


    }
    catch(error){
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
}

module.exports={ createChat, findUserChats, findChat}