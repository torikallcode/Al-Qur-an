import React from 'react'
import { MySvg } from '../atoms/MySvg'

export const HomePage = () => {
  return (
    <div className='w-full min-h-screen bg-primary px-8 flex justify-center items-center'>
      <div className=''>
        <MySvg className="w-64 h-64"></MySvg>
      </div>
    </div>
  )
}
