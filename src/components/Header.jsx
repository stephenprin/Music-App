import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from "../assets/img"
import{isActiveStyles, isNotActiveStyles} from  "../utils/styles"

function Header() {
  return (
 
          <header className='w-full flex items-center p-4 md:py-2 md:px-6'>
          <NavLink to='/'>
          <img src={Logo} alt="logo" className='w-16 ' />
         </NavLink>
        
          <ul className='flex justify-center ml-6 items-center'>
              <li className='text-lg mx-5'><NavLink to={'/home'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Home</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/music'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Music</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/premium'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Premium</NavLink></li>
              <li className='text-lg mx-5'><NavLink to={'/contact'} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>Contact Us</NavLink></li>
          </ul>
      </header>
  
  )
}

export default Header
