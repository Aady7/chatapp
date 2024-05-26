import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl } from "../utils/services";
import { postRequest } from "../utils/services";

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Aady",
  });
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const[loginInfo,setLoginInfo]=useState({
    email:"",
    password:""
  });
    const[loginLoading,setLoginLoading]=useState(false);
    const[loginError,setLoginError]=useState(null);
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);
    const updateLoginInfo=useCallback((info)=>{
        setLoginInfo(info);
    },[]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    setUser(JSON.parse(user));
  },[]);
  const registerUser = useCallback(async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    const response = await postRequest(
      `user/register`,
      JSON.stringify(registerInfo)
    );
    if (response.error) {
      setRegisterError(response);
      return;
    }
    localStorage.setItem("user", JSON.stringify(response));
    setUser(response);
    setRegisterLoading(false);
  }, [registerInfo]);

  const loginUser=useCallback(async(e)=>{
    e.preventDefault();
    setLoginLoading(true);
    const response=await postRequest(`user/login`, JSON.stringify(loginInfo));
    if(response.error){
      setLoginError(response);
      return;
    }
    localStorage.setItem("user", JSON.stringify(response));
    setUser(response);
    setLoginLoading(false);
  });

  const logoutUser=useCallback(()=>{
    localStorage.removeItem("user");
    setUser(null);
  },[]);
  console.log(registerInfo);
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerLoading,
        registerError,
        logoutUser,
        loginInfo,
        updateLoginInfo,
        loginUser,
        loginLoading,
        loginError,
        

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
