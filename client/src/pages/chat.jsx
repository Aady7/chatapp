import { useContext } from "react";
import Navbar from "../components/navbar";
import ChatContext from "../context/ChatContext";
function Chat() {
   const {isUserChatLoading, userChat, userChatError} = useContext(ChatContext);
    console.log(userChat);
    return (
        <div>
        <Navbar />
           
            <h1 className="text-3xl font-bold underline">Chat</h1>
        </div>
    );
}

export default Chat;