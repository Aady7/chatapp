import { useEffect, useState } from "react";
import { getRequest } from "../utils/services";


export const useFetchRecipeintUser = (chat, user) => {
    const [reciepientUser, setReciepientUser] = useState(null);
    const[reciepientLoading, setReciepientLoading] = useState(false);
    const[reciepientError, setReciepientError] = useState(null);

    const reciepientId= chat?.members?.find((id)=>{ return id!=user._id});

    useEffect(()=>{
        const getUser=async()=>{
           
            if(!reciepientId) return;

            setReciepientLoading(true);
            setReciepientError(null);
            console.log("nahi run hua yeh part");
            
            const response= await getRequest(`user/${reciepientId}`);
            if(response.error){
                setReciepientError(response);
                setReciepientLoading(false);
                return;
            }
            setReciepientUser(response);
         
        }
        getUser();
       
       


    },[])

    

    return{
        reciepientError,
        reciepientLoading,
        reciepientUser,
    }

};

