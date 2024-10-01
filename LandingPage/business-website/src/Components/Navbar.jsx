import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className='fixed w-full z-0 top-0 left-0'>
        <ul className='max-w-[90vw] flex flex-wrap justify-between mx-auto'>

            <a href="" className='font-semibold text-2xl'>Hablu-Programmer</a>

            <div className='flex [&>li]:pl-7'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="About">About</NavLink></li>
                <li><NavLink to="Contact">Contact </NavLink></li>
                <li><NavLink to="Signup">Signup</NavLink></li>
            </div>
        </ul>
    </nav>

    <Outlet />
    </>
  )
}

export default Navbar