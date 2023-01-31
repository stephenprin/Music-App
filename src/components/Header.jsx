import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Logo } from "../assets/img"
import{isActiveStyles, isNotActiveStyles} from  "../utils/styles"
import { GiChessKing } from "react-icons/gi"
import { useStateGlobal } from "../context/StateProvider"
import { app } from "../config/firebase.config"
import { getAuth } from "firebase/auth"
import { motion } from 'framer-motion'
import { useState } from 'react'

function Header() {
    const [{ user }, dispatch] = useStateGlobal();

    const [isShow, setShow] = useState(false)
    const navigate = useNavigate()
     
    const signOut = () => { 
        const firebaseAuth = getAuth(app)
        firebaseAuth.signOut().then(() => {
            
            window.localStorage.setItem("auth", false)
        }).catch((error) => { 
            console.log(error)
            navigate("/login", {replace: true})
        })
    }



  return (
   
          <header className='w-full flex items-center p-4 md:py-2 md:px-6 bg-gradient-to-r from-black-700 to-slate-800'>
          <NavLink to='/'>
          <img src={Logo} alt="logo" className='w-10 ' />
         </NavLink>
        
          <ul className='flex justify-center ml-6 items-center'>
              <li className='text-lg mx-5'><NavLink to={'/home'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Home</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/music'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Music</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/premium'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Premium</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/contact'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Contact Us</NavLink></li>
          </ul>

          <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}
              className='flex items-center ml-auto cursor-pointer gap-2 relative'>
              <img src={user?.data.imageUrl} className='w-11 h-11 rounded-full object-cover min-w-[44px] shadow-lg' alt="" referrerPolicy='no-referrer' />
              <div className='flex flex-col'>
                  <p className='text-textColor text-sm hover:text-gray-400 font-normal'>{ user?.data?.name}</p>
                    <p className='flex items-center gap-2 text-xs text-cyan-600 font-normal'>Premium Member <GiChessKing className="text-amber-500"/></p>
              </div>

              {isShow && (
                  <motion.div initial={{opacity:0, y: -10}} animate={{opacity:1, y:0}} exit={{opacity:0, y: -10}}
                  className='absolute z-10 top-10 p-4 right-0 w-275 gap-2 bg-slate-900 shadow-lg rounded-lg backdrop-blur-sm flex flex-col'>
                  <NavLink to={'/userProfile'}>
                      <p className=' text-sm text-cyan-500 hover:font-semibold duration-150  transition-all ease-in-out'>Profile</p>
                     
                  </NavLink>
                      <p className=' text-sm text-cyan-500 hover:font-semibold duration-150  transition-all ease-in-out'>My Favorites</p>
                      {user?.data?.role === "admin" && (
                          <NavLink to={'/dashboard/home'}> <p className=' text-sm text-cyan-500 hover:font-semibold duration-150  transition-all ease-in-out'>Dashboard</p>
                          </NavLink>
                      )}
                      <hr />
                    <p className=' text-sm text-cyan-500 hover:font-semibold duration-150  transition-all ease-in-out' onClick={signOut}>Sign Out</p>
              </motion.div>
              )}
          </div>
      </header>
  
  )
}

export default Header
 