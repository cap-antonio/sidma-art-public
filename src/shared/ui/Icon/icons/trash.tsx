import React from 'react'

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <image>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1H6V2H10V1ZM2 3V4H3V14C3 14.6 3.4 15 4 15H12C12.6 15 13 14.6 13 14V4H14V3H2ZM4 14V4H12V14H4ZM6 6H7V12H6V6ZM10 6H9V12H10V6Z"
          fill="current"
        />
      </svg>
    </image>
  )
}
