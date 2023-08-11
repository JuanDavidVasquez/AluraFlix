import React from 'react'
import Sidebar from './layouts/Sidebar'
import BackendVideo from './video/BackendVideo'
import FrontedVideo from './video/FrontedVideo'
import Footer from './layouts/Footer'

export default function Home() {
  return (
    <div className='home_container'>
    <Sidebar/>
    <BackendVideo/>
    <FrontedVideo/>
    </div>
  )
}
