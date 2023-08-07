import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul className='ulNav'>
        <li className='item-nav'>
        <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""}> Home </NavLink>
        </li>
        <li className='item-nav'>
        <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""}> Home </NavLink>
        </li>
      </ul>
    </nav>
  )
}
