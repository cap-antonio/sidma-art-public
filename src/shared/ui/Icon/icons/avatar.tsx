import React from 'react'

export const Avatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <picture>
    <svg
      height="18"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="current" cx="256" cy="114.526" r="114.526" />
      <path
        fill="current"
        d="M256,256c-111.619,0-202.105,90.487-202.105,202.105c0,29.765,24.13,53.895,53.895,53.895h296.421
			c29.765,0,53.895-24.13,53.895-53.895C458.105,346.487,367.619,256,256,256z"
      />
    </svg>
  </picture>
)
