import React from 'react'
import { AiFillGoogleCircle} from "react-icons/ai"
import { app } from "../config/firebase.config"
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'



export const Login = () => {
  
    const firebaseauth = getAuth(app)
    const provider=new GoogleAuthProvider()
    
    const navigate=useNavigate()

    const loginWithGoogle = async () => { 
        await signInWithPopup(firebaseauth, provider).then((userInfo) => { 
           
        })
    }

  return (
     <div className='relative w-screen h-screen'>
          <div className='absolute inset-0 flex items-center bg-sky-900/50 justify-center p-4'>
              <div className='w-full md:w-375 p-4 bg-sky-900 shadow-2xl rounded-md  backdrop-blur-md flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-sky-800 hover:bg-sky-700/50 hover:shadow-md duration ease-in-out
              transition-all cursor-pointer ' onClick={loginWithGoogle }>
                  <AiFillGoogleCircle className='text-xl'/>
                  Sign in with Google
              </div>
              </div>
        </div>
    </div>
  )
}

export default Login
