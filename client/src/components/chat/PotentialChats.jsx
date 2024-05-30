import { useContext } from "react";
import ChatContext from "../../context/ChatContext";
import AuthContext from "../../context/AuthContext";
const PotentialChats = () => {
  const { potentialChats, CreateChat } = useContext(ChatContext);
  const{user}=useContext(AuthContext)
  return (
    <div>
      <p>some chats</p>
      {potentialChats?.map((u, index) => {
        return (
          <div key={index} onClick={()=>{CreateChat(user._id,u._id)}}>
            <p>{u.username}</p>
          </div>
        );
      })}
    </div>
  );
};
export default PotentialChats;
