import React, { useEffect } from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { Login, Home } from "./components"
import { app } from "./config/firebase.config"
import { getAuth } from "firebase/auth"
import { AnimatePresence } from "framer-motion"
import {Header} from "./components"


function App() {
  const [auth, setAuth] = React.useState(false || window.localStorage.getItem("auth") === "true")

  
  useEffect(() => { 
   
  }, [])

  return (
    <AnimatePresence mode='wait'>
      
    <div className="min-w-[680px]  h-auto text-white bg-slate-800 flex justify-center items-center">
        
        <Router>
            <Header/>
          <Routes>

        <Route path="/login" element={<Login setAuth={ setAuth} />} />
            <Route path="/" element={<Home/>} />
        </Routes>
       </Router>
      
      </div>
      </AnimatePresence>
  );
}

export default App;
