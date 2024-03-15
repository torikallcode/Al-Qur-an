import React, { useEffect, useState } from 'react'

export const Navbar = () => {

  const [hamburger, setHamburger] = useState(false)

  useEffect(() => {
    if (hamburger === true) {
      alert("hallo")
    }
  }, [])

  return (
    <div className="navbar bg-primary justify-between fixed z-50">
      <div className="">
        <a className="btn btn-ghost text-4xl font-utama text-secondary">Al-Qur'an</a>
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 py-5 shadow bg-secondary text-primary rounded-box w-52">
            <li><a className='text-lg font-inter'>Home</a></li>
            <li><a className='text-lg font-inter'>Surah</a></li>
            <li><a className='text-lg font-inter'>Dzikir & Do'a</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
