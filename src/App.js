import React, { useEffect } from 'react';
import './App.css';
import {  Routes, Route, useNavigate } from "react-router-dom"
import { Login, Home } from "./components"
import { app } from "./config/firebase.config"
import { getAuth} from "firebase/auth"


function App() {
  const [auth, setAuth] = React.useState(false || window.localStorage.getItem("auth") === "true")
  
  const firebaseappAuth = getAuth(app)
  const navigate = useNavigate()
  
  useEffect(() => { 
    firebaseappAuth.onAuthStateChanged((userInfo) => { 
      if(userInfo) { 
        userInfo.getIdToken().then((token) => {
          console.log(token)
       })
      } else {
        console.log("user not logged in")
        window.localStorage.setItem("auth", false)
        navigate("/login")
      }
    } )
  }, [])

  return (
    <div className="w-screen  h-screen text-white bg-slate-800 flex justify-center items-center">
      
        <Routes>
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
      
    </div>
  );
}

export default App;
