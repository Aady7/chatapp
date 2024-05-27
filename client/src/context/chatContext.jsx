import { createContext, useState } from "react";
import { useEffect } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/services";

const ChatContext = createContext();
export default ChatContext;

export const ChatContextProvider = ({ children, user }) => {
  const [userChat, setUserChat] = useState(user);
  const [isUserChatLoading, setIsUserChatLoading] = useState(false);
  const [userChatError, setUserChatError] = useState(null);

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
  return (
    <ChatContext.Provider
      value={{ isUserChatLoading, userChat, userChatError }}
    >
      {children}
    </ChatContext.Provider>
  );
};
