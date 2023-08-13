import React from 'react'

const SvgIcons = function () {
  return (
    <svg
      style={{ width: 0, height: 0, position: 'absolute', zIndex: -1 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <symbol id="icn-check" width="20" height="20" viewBox="0 0 20 20"
              fill="none">
        <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
        <circle opacity="0.01" cx="10" cy="10" r="10"
                fill="url(#paint0_linear_0_343)"/>
        <path opacity="0.01" d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5"
              stroke="white" stroke-width="2"/>
        <defs>
          <linearGradient id="paint0_linear_0_343" x1="-10" y1="10" x2="10"
                          y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color="#55DDFF"/>
            <stop offset="1" stop-color="#C058F3"/>
          </linearGradient>
        </defs>
      </symbol>
      <symbol id="icn-checked" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
        <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_371)"/>
        <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" stroke-width="2"/>
        <defs>
          <linearGradient id="paint0_linear_0_371" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color="#55DDFF"/>
            <stop offset="1" stop-color="#C058F3"/>
          </linearGradient>
        </defs>
      </symbol>
    </svg>
  )
}

export default SvgIcons