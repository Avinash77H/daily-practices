import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function Navbar() {
  return (
   <div>
     <div className='border-2 border-black flex px-12 py-1  justify-between items-center mt-4'>
      <div className=''>
        <nav>
            <p className='text-3xl font-bold'>Navbar</p>
        </nav>
      </div>

      <div className=''>
        <ul className='flex justify-between gap-28 '>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </div>

    <div>
        <Outlet/> 
    </div>
   </div>
  )
}

export default Navbar
