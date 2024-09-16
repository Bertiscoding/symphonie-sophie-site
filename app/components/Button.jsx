"use client"

import Link from "next/link"

const Button = (props) => {
  const { btnLink, btnClassNames, btnText } = props
  return (
    <Link
      href={btnLink}
      className={`bg-ss-green hover:bg-ss-green-mute block rounded w-fit min-w-40 py-1.5 px-4
        ${btnClassNames ? btnClassNames : ''}`}
    >
      <div className="flex justify-between text-ss-p-smbold text-ss-black">
        <span className="mr-6">{btnText}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
export default Button