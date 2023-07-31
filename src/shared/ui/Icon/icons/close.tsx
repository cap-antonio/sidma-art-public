import React from 'react'

export const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <picture>
    <svg {...props} width="22px" viewBox="0 0 125 125">
      <polygon points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 " />
    </svg>
  </picture>
)
