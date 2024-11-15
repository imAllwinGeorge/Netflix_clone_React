import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <img src={logo} alt='logo'/>
            <ul>
                <li>Home</li>
                <li>Tv Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by lanquage</li>
            </ul>
        </div>
        <div className='nav-right'>
            <img src={search_icon} alt='searcj' className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt='bell' className='icons' />
            <div className='nav-profile' >
                <img src={profile_img} alt='profile' className='profile'/>
                <img src={caret_icon} alt='dropdown' />
                <div className='dropdown'>
                    <p>Singout of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar