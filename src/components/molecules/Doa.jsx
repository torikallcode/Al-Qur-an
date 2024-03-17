import React from 'react'
import { Link } from 'react-router-dom'

export const Doa = ({ judul, className, id }) => {
  return (
    <Link to={`/doa/${id}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 w-full gap-x-7 border-b shadow-sm ${className}`}>
        <div className="w-full py-5 px-3">
          <h1 className="text-center font-inter text-lg font-semibold text-primary">{judul}</h1>
        </div>
      </div>
    </Link>
  )
}
