import React from 'react'
import { MySvg } from '../atoms/MySvg'

export const HomePage = () => {
  return (
    <div className='w-full min-h-[60dvh] bg-primary px-8 flex flex-col justify-center items-center gap-y-7'>
      <div className=''>
        <MySvg className="w-40 h-40"></MySvg>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='font-kedua text-3xl text-putih'>Al-Qur'an <span className='opacity-70'>•</span> Digital</h1>
        <p className='text-putih font-kedua text-base text-center max-w-xs'>Buka pintu berkah dengan Al-Qur'an di Genggaman Anda. Akses ayat suci dengan mudah, di manapun Anda berada.</p>
      </div>
    </div>
  )
}
