import React from 'react'
import {Routes, Route , Navigate} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Chat from './pages/chat'
import AuthContext from './context/AuthContext'
import {useContext} from 'react'
import ChatContext from './context/ChatContext'
import { ChatContextProvider } from './context/ChatContext'

function App() {
  const{user}=useContext(AuthContext)

  return (
    <>
    <div>
    <ChatContextProvider user={user}>
      <Routes>
      <Route path="/login" element={user? <Chat/>:<Login/>} />
      <Route path="/register" element={user?<Chat/>:<Register/>} />
      <Route path="/" element={user?<Chat/>:<Login/>} />
      </Routes>
      </ChatContextProvider>
    </div>
  
    
    </>
  )
}

export default App
