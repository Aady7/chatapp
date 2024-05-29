import { createContext, useState } from "react";
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
  }, [user]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest("user");
      if (response.error) {
        setPotentialChatError(response);
        return;
      }
     const pchats= response.filter((v, index) => {
        const isChatCreated = false;
        if (user._id == v._id) {
          return;
        }

        if (userChat) {
          availableChats = userChat?.some((chat) => {
            return (isChatCreated =
              chat.member[0] === v._id || chat.member[1] === v._id);
          });
        }

        return !isChatCreated;


      });
      setPotentialChats(pchats);
    };
    getUsers();
  }, [userChatError]);

  return (
    <ChatContext.Provider
      value={{ isUserChatLoading, userChat, userChatError, potentialChats, potentialChatError}}
    >
      {children}
    </ChatContext.Provider>
  );
};
