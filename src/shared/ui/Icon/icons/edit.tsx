import React from 'react'

export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <picture>
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
          d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z"
          fill="current"
        />
      </svg>
    </picture>
  )
}
