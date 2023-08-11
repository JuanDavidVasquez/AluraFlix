import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className='ulNav'>
        <li className='item-nav titleNetFlix'>
          <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""}> ALURAFLIX </NavLink>
        </li>
        <li className='item-nav newVideo'>
          <NavLink to="/create-video" className={({isActive})=> isActive ? "active" : ""}>Nuevo Video</NavLink>
        </li>
      </ul>
    </nav>
  )
}
