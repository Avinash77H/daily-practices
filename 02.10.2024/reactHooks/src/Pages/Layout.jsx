import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Error from './Error'
import Navbar from '../Components/Navbar'

function Layout() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
