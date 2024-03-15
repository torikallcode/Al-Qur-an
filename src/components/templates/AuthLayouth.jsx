import React from 'react'
import { HomePage } from '../organism/HomePage'
import { Main } from '../organism/MainContent'
import { ButtomNavbar } from '../organism/ButtomNavbar'

export const AuthLayouth = () => {
  return (
    <div className='bg-white'>
      <HomePage></HomePage>
      <div className='px-8 max-w-sm sm:max-w-xl w-full mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
        <ButtomNavbar></ButtomNavbar>
        <Main></Main>
      </div>
    </div>
  )
}
