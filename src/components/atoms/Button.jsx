import React from 'react'

export const Button = ({ onClick, className, text = "..." }) => {
  return (
    <button onClick={onClick} className={`${className} font-inter`}>{text}</button>
  )
}
