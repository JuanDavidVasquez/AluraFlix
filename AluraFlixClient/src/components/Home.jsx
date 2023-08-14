import React from 'react'
import Sidebar from './layouts/Sidebar'
import Videos from './video/Videos'

export default function Home() {
  return (
    <div className='home_container'>
    <Sidebar/>
    <Videos/>
    </div>
  )
}
