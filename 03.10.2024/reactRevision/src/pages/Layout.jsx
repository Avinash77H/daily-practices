import React from 'react'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={Home}></Route>
                <Route path="/about" element={About}></Route>
                <Route path="/shop" element={Shop}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
