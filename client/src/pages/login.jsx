import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/navbar";
function Login() {
    const{      loginInfo,
        updateLoginInfo,
        loginUser,
        loginLoading,
        loginError}=useContext(AuthContext);
  return (
    <>

    <Navbar/>

    <div className="flex justify-center items-center h-screen">
  
           
            <form className="w-1/3 bg-slate-900 text-yellow-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginUser}>
            <div>
                <h1 className="text-3xl font-bold text-center ">Login</h1>
                <p className="text-gray-400 mb-5 text-center">Let's chat to your friends</p>
            </div>
               
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none w-full py-2 px-3 text-gray-200  leading-tight focus:outline-none focus:shadow-outline  bg-black"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                       onChange={(e)=>{updateLoginInfo({...loginInfo, email:e.target.value})}}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password ">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3  text-gray-200  leading-tight focus:outline-none focus:shadow-outline  bg-black"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e)=>{updateLoginInfo({...loginInfo, password:e.target.value})}}
                    />
                </div>
                <div className="flex items-center justify-between pt-5">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                    {
                        loginError && <p className="text-red-500">{ loginError.message}</p>
                    }
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;