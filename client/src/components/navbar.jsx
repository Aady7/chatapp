import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const{logoutUser, user} = useContext(AuthContext);
    return (
        <div>
            <nav className="bg-gradient-to-r from-slate-900 to-slate-700 pt-4 pb-4 pl-6 pr-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-500">Chat App</h1>
                      {
                        user &&  <h3>logged in as {user.username}</h3>
                      } 

                    </div>
                    <div>
                    {
                      user? <Link to="/login" onClick={logoutUser} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Logout</Link>:<Link to="/register" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Register</Link>
                
                    }
                      
                    </div>
                </div>
            </nav>
        </div>
    );
}