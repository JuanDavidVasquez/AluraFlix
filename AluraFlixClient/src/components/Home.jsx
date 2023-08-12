import React from 'react'
import Sidebar from './layouts/Sidebar'
import BackendVideo from './video/BackendVideo'
import FrontedVideo from './video/FrontedVideo'
import Footer from './layouts/Footer'
import Videos from './video/Videos'

export default function Home() {
  return (
    <div className='home_container'>
    <Sidebar/>
    <Videos/>
    </div>
  )
}
