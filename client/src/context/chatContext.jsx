import { createContext, useState } from "react";
import { useEffect } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/services";

const chatContext=createContext();
export default chatContext

export const chatContextProvider=({children, user})=>{
    const [userChat, setUserChat]=useState(user);
    const [isUserChatLoading, setIsUserChatLoading]=useState(false);
    const [userChatError, setUserChatError]=useState(null);

    useEffect(()=>{
        const getUserChats=async()=>{
            setIsUserChatLoading(true);
            setUserChatError(null);
            const response=await getRequest(`chat/${user._id}`);
            if(response.error){
                setUserChatError(response);
                setIsUserChatLoading(false);
                return;
            }
            setUserChat(response);
            setIsUserChatLoading(false);

        }
        getUserChats();

    },[user])
    return(
        <chatContext.Provider value={{isUserChatLoading, userChat,userChatError}}>
            {children}
        </chatContext.Provider>
    )

}