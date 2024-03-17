import React from 'react'
import { Link } from 'react-router-dom'

export const Doa = ({ judul, className, id }) => {
  return (
    <Link to={`/doa/${id}`}>
      <div className={`flex justify-center items-center gap-y-3 w-full gap-x-5 md:gap-x-0 border-b shadow-sm ${className}`}>
        <div className="w-full py-5 px-3 flex items-center gap-x-3">
          <h1 className='font-inter font-semibold text-primary text-lg'>{id}.</h1>
          <br />
          <h1 className="font-inter text-lg font-semibold text-primary">{judul}</h1>
        </div>
      </div>
    </Link>
  )
}
