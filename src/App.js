import React, { useEffect } from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { Login, Home } from "./components"
import { app } from "./config/firebase.config"
import { getAuth } from "firebase/auth"
import { AnimatePresence } from "framer-motion"
import {Header} from "./components"
import { useStateGlobal } from './context/StateProvider';
import { validateUser } from './api';
import { actionType } from './context/reducer';

function App() {
  const [auth, setAuth] = React.useState(false || window.localStorage.getItem("auth") === "true")

  const firebaseauth = getAuth(app)
  const navigate = useNavigate()

  const [user, dispatch] = useStateGlobal(); 
  
  useEffect(() => { 
    firebaseauth.onAuthStateChanged((userCred) => { 
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateUser(token).then((data) => { 
            dispatch({type:actionType.SET_USER, user:data})
          })
        })
      }
      else {
        setAuth(false)
        dispatch({type:actionType.SET_USER, user:null})
        window.localStorage.setItem("auth", false)
        navigate("/login")
      }
    } )
  }, [])

  return (
    <AnimatePresence mode='wait'>
      
    <div className="min-w-[680px]  h-auto text-white bg-slate-800 flex justify-center items-center">
  
          
          <Routes>

        <Route path="/login" element={<Login setAuth={ setAuth} />} />
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      
      </div>
      </AnimatePresence>
  );
}

export default App;
