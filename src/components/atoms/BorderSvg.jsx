import React from 'react'

export const BorderSvg = ({ className, warna = "#488395" }) => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      width="46.33mm"
      height="46.33mm"
      viewBox="-16171 3697 4633 4633"
      preserveAspectRatio="xMidYMid"
      fillRule="evenodd"
      strokeWidth="28.222"
      strokeLinejoin="round"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
    >
      <defs>
        <clipPath id="presentation_clip_path" clipPathUnits="userSpaceOnUse">
          <rect x="-16171" y="3697" width="4633" height="4633" />
        </clipPath>
      </defs>
      <g>
        <g>
          <g>
            <rect className="BoundingBox" stroke="none" fill="none" x="-16172" y="3696" width="4635" height="4635" />
            <path fill={warna} stroke="none" d="M -15316,7474 L -14460,7474 -13855,8079 -13250,7474 -12394,7474 -12394,6618 -11789,6013 -12394,5408 -12394,4552 -13250,4552 -13855,3947 -14460,4552 -15316,4552 -15316,5408 -15921,6013 -15316,6618 -15316,7474 Z M -15493,7651 L -15493,6691 -16171,6013 -15493,5335 -15493,4375 -14533,4375 -13855,3697 -13177,4375 -12217,4375 -12217,5335 -11539,6013 -12217,6691 -12217,7651 -13177,7651 -13855,8329 -14533,7651 -15493,7651 Z" />
            <path fill="none" stroke={warna} d="M -15316,7474 L -14460,7474 -13855,8079 -13250,7474 -12394,7474 -12394,6618 -11789,6013 -12394,5408 -12394,4552 -13250,4552 -13855,3947 -14460,4552 -15316,4552 -15316,5408 -15921,6013 -15316,6618 -15316,7474 Z" />
            <path fill="none" stroke={warna} d="M -15493,7651 L -15493,6691 -16171,6013 -15493,5335 -15493,4375 -14533,4375 -13855,3697 -13177,4375 -12217,4375 -12217,5335 -11539,6013 -12217,6691 -12217,7651 -13177,7651 -13855,8329 -14533,7651 -15493,7651 Z" />
          </g>
        </g>
      </g>
    </svg>
  )
}
