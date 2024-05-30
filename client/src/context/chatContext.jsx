import { createContext, useCallback, useState } from "react";
import { useEffect } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/services";


const ChatContext = createContext();
export default ChatContext;

export const ChatContextProvider = ({ children, user }) => {
  const [userChat, setUserChat] = useState(null);
  const [isUserChatLoading, setIsUserChatLoading] = useState(false);
  const [userChatError, setUserChatError] = useState(null);
  const [potentialChats, setPotentialChats] = useState(null);
  const [potentialChatError, setPotentialChatError] = useState(null);
  const[currentChat, setCurrentChat]=useState(null);
  

  useEffect(() => {
    const getUserChats = async () => {
      setIsUserChatLoading(true);
      setUserChatError(null);
      const response = await getRequest(`chat/${user._id}`);
      if (response.error) {
        setUserChatError(response);
        setIsUserChatLoading(false);
        return;
      }
      setUserChat(response);
      setIsUserChatLoading(false);
    };
    getUserChats();
  }, [userChat]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest("user");
      if (response.error) {
        setPotentialChatError(response);
        return;
      }
      const pchats = response.filter((v, index) => {
        let isChatCreated = false;
        if (user._id === v._id) {
          return false;
        }

        if (userChat) {
          isChatCreated = userChat?.some((chat) => {
            
            return (
              chat?.members?.[0] === v._id || chat?.members?.[1] === v._id);
             
            
          });
        }

        return !isChatCreated;
      });
      setPotentialChats(pchats);
    };
    getUsers();
  }, [userChat]);

  const CreateChat = useCallback(async (firstID, secondID) => {
    const response = await postRequest(
      `chat`,
      JSON.stringify({ firstID, secondID })
    );
    if (response.error) {
      console.log("Error occured:", response);
    }
   setUserChat((prev)=>{[...prev, response]})
  }, []);

  const getCurrentChat=useCallback((chat)=>{
    setCurrentChat(chat);

  },[]);

  return (
    <ChatContext.Provider
      value={{
        isUserChatLoading,
        userChat,
        userChatError,
        potentialChats,
        potentialChatError,
        CreateChat,
        getCurrentChat,
        currentChat,
        
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
