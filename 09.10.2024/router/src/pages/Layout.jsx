import React from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Error from './Error'
import Navbar from '../components/Navbar'

function Layout() {
  return (
  <>
     <BrowserRouter>
   <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<Error/>}></Route>
    </Routes>
   </BrowserRouter>
  </>
  )
}

export default Layout
