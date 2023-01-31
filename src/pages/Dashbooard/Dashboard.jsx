import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Header } from "../../components"
import { AiFillHome, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BsMusicNoteList ,BsMusicPlayer} from 'react-icons/bs'
import { RiAlbumFill } from 'react-icons/ri'
import {DashboardArtist,DashboardAlbum, DashboardHome, DashboardSongs,DashboardUsers} from './'


const Dashboard = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-black-700 to-slate-100'>
      <Header/>
      <div className='w-[80%] my-2 h-14 p-4 flex items-center justify-evenly ' >
        <NavLink to={'/dashboard/home'} ><AiFillHome className='text-2xl text-cyan-800 hover:text-cyan-600 cursor-pointer' /></NavLink>
        <NavLink to={'/dashboard/user'}><AiOutlineUsergroupAdd className='text-2xl text-cyan-800 hover:text-cyan-600 cursor-pointer'/></NavLink>
        <NavLink to={'/dashboard/song'}><BsMusicNoteList className='text-2xl text-cyan-800 hover:text-cyan-600 cursor-pointer'/></NavLink>
        <NavLink to={'/dashboard/artist'}><BsMusicPlayer className='text-2xl text-cyan-800 hover:text-cyan-600 cursor-pointer'/></NavLink>
        <NavLink to={'/dashboard/album'}><RiAlbumFill className='text-2xl text-cyan-800 hover:text-cyan-600 cursor-pointer'/></NavLink>
      </div>
      
      <div className='w-full p-4 my-4'>
        <Routes>
          <Route path='/home' element={<DashboardHome />} />
          <Route path='/user' element={<DashboardUsers />} />
          <Route path='/song' element={<DashboardSongs/>} />
          <Route path='/artist' element={<DashboardArtist />} />
          <Route path='/album' element={<DashboardAlbum />} />
         </Routes>
      </div>
    </div>
  )
}

export default Dashboard
