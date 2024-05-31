import { useContext } from "react";
import Navbar from "../components/navbar";
import ChatContext from "../context/ChatContext";
import AuthContext from "../context/AuthContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";

function Chat() {
  const {
    isUserChatLoading,
    userChat,
    userChatError,
    getCurrentChat,
    currentChat,
    message
  } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <PotentialChats />
      {userChat && userChat.length < 1 ? null : (
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 bg-slate-900 text-yellow-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-center">Chats</h1>
              <p className="text-gray-400 mb-5 text-center">
                Let's chat with your friends
              </p>
            </div>
            {userChat?.map((chat, index) => {
              const chatMemberId = chat?.members.find((id) => id !== user._id);
              return (
                <div
                  key={index}
                  className="mb-4 shadow appearance-none w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-black"
                  onClick={()=>{getCurrentChat(chat)}}
                >
                  <UserChat chat={chat} user={user} />
                
                </div>
              );
            })}
            <div>
                {currentChat &&<p>{currentChat.members[1]}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
