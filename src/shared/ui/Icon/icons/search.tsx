import React from 'react'

export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <picture>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7465 16.8691L13.0277 12.1254C15.371 9.29796 15.0786 5.12811 12.3636 2.65542C9.64865 0.182724 5.4697 0.280262 2.87303 2.87693C0.276356 5.4736 0.178817 9.65256 2.65151 12.3675C5.1242 15.0825 9.29406 15.3749 12.1215 13.0316L16.8652 17.7504L17.7465 16.8691ZM2.12146 7.75036C2.12146 4.64376 4.63985 2.12536 7.74646 2.12536C10.8531 2.12536 13.3715 4.64376 13.3715 7.75036C13.3715 10.857 10.8531 13.3754 7.74646 13.3754C4.63985 13.3754 2.12146 10.857 2.12146 7.75036Z"
        fill="#C6C6C6"
      />
    </svg>
  </picture>
)
