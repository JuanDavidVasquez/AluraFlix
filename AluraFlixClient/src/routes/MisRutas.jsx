import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from '../components/Home';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import CreateVideo from '../components/video/CreateVideo';
import CreateCategoria from '../components/Categorias/CreateCategoria';


export default function MisRutas() {
  return (
    <BrowserRouter>
    {/* Contenido central */}
    <section className='content'>
    <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/create-video' element={<CreateVideo/>}/>
        <Route path='/create-categoria' element={<CreateCategoria/>}/>
      </Routes>
      <Footer/>
    </section>
  </BrowserRouter>
  )
}