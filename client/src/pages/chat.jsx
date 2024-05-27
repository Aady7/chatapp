import { useContext } from "react";
import ChatContext from "../context/ChatContext";
import Navbar from "../components/navbar";
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