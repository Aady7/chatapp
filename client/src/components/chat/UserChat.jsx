import { useFetchRecipeintUser } from "../../hooks/useFetchRecipeint";
import AuthContext from "../../context/AuthContext";

const UserChat = ({ chat, user }) => {
  const { reciepientError, reciepientLoading, reciepientUser } =
    useFetchRecipeintUser(chat, user);

  return (
    <div>
      UserChat
      <p>{reciepientUser?.username} </p>
    </div>
  );
};
export default UserChat;
