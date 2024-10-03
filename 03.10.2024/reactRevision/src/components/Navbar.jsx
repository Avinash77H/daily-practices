import React from 'react'

function Navbar() {
  return (
    <div className='border-2 border-black p-2 flex items-center justify-between px-20 '>
      <div className='text-white text-3xl bg-purple-500 inline-block p-4 rounded-xl'>NavIcon</div>
      <nav>
        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
