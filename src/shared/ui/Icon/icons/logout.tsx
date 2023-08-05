import React from 'react'

export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <picture>
    <svg
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 14H7C7.55206 13.9994 7.99945 13.5521 8 13V11.5H7V13H1V1H7V2.5H8V1C7.99945 0.447944 7.55206 0.00055123 7 0H1C0.447944 0.00055123 0.00055123 0.447944 0 1V13C0.00055123 13.5521 0.447944 13.9994 1 14ZM8.293 9.293L10.086 7.5H3V6.5H10.086L8.293 4.707L9 4L12 7L9 10L8.293 9.293Z"
        fill="#000000"
      />
    </svg>
  </picture>
)
