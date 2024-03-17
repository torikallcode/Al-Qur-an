import React from 'react'

export const BackSvg = ({ warna, className, width, height }) => {
  return (
    <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={{ fill: `${warna}` }}>
      <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
    </svg>
  )
}
