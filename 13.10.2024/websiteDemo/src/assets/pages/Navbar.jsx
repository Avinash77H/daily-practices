import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <ul className="flex justify-center gap-8">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Navbar
