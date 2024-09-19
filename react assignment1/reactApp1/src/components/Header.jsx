import React from 'react'

const Header = () => {
  return (
    <div className='w-screen' >
      <nav className=' flex justify-between  items-center  h-20 bg-rose-600 '>
        <h1 className='mt-2 text-3xl text-blue-950 font-bold pl-4   text-neutral-400'>FlipKart</h1>
        <ul className='flex gap-5 mt-2 mr-6'>
            <li className='hover:text-white hover:scale-150 h-10 text-2xl text-neutral-400'>Home</li>
            <li className='hover:text-white hover:scale-150 h-10 text-2xl text-neutral-400'>About</li>
            <li className='hover:text-white hover:scale-150 hover:px-3 h-10 text-2xl text-neutral-400'>Contact Me</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
