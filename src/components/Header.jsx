import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from "../assets/img"
import{isActiveStyles, isNotActiveStyles} from  "../utils/styles"
import { GiChessKing } from "react-icons/gi"
import { useStateGlobal } from "../context/StateProvider"


function Header() {
    const [{user}, dispatch] = useStateGlobal();
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

          <div className='flex items-center ml-auto cursor-pointer gap-2 relative'>
              <img src={user?.data.imageUrl} className='w-11 h-11 rounded-full object-cover min-w-[44px] shadow-lg' alt="" />
              <div className='flex flex-col'>
                  <p className='text-textColor text-sm hover:text-gray-400 font-normal'>{ user?.data?.name}</p>
                    <p className='flex items-center gap-2 text-xs text-cyan-600 font-normal'>Premium Member <GiChessKing className="text-amber-500"/></p>
              </div>
          </div>
      </header>
  
  )
}

export default Header
