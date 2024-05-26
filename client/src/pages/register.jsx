import Navbar from "../components/navbar";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const  Register=()=>{
   const {user, updateRegisterInfo, registerInfo,registerUser, registerLoading,registerError}=useContext(AuthContext);

    return (
       
        <>
        <Navbar/>
        <div className="flex justify-center items-center h-screen">

          
            <form className="w-1/3 bg-slate-900 text-yellow-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
                <h1 className="text-3xl font-bold text-center ">Register</h1>
                <p className="text-gray-400 mb-5 text-center">Create a new account as </p>
            </div>
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        onChange={(e)=>{updateRegisterInfo({...registerInfo, username:e.target.value})}}
                    />
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
                        onChange={(e)=>{updateRegisterInfo({...registerInfo, email:e.target.value})}}
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
                        onChange={(e)=>{updateRegisterInfo({...registerInfo, password:e.target.value})}}
                       
                    />
                </div>
                <div className="flex items-center justify-between pt-5">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={registerUser}
                       
                    >
                        Register
                    </button>
                  {registerError && <p>{registerError.message}</p>}
                </div>
            </form>
        </div>
        </>
    );
}
export default Register;
   
