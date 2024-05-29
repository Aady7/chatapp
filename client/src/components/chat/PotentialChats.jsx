import { useContext } from "react"
import ChatContext from "../../context/ChatContext"
const PotentialChats=()=>{
    const {potentialChats}=useContext(ChatContext);
    return(
        <div>
            {
                console.log(potentialChats)

            }
            <p>some chats</p>
        </div>
    )



}
export default PotentialChats