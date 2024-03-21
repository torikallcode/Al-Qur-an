import React from 'react'

export const PauseSvg = ({ warna = "#488395", className }) => {
  return (
    <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={warna}><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>
  )
}
