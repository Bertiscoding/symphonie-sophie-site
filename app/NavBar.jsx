"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const NavItems = (props) => {
  const [navOpen, setNavOpen] = useState(false)
  const navRef = useRef(null)
  const pathname = usePathname()

  const renderNavLinks = props.items
    .filter(element => element.navDisplay === "TRUE")
    .map((el, i) => (
      <Link
        key={i}
        href={el.navLink}
        onClick={() => setNavOpen(!navOpen)}
        className="text-ss-p-smbold py-3 cursor-pointer flex items-center"
      >
        <span className={pathname === el.navLink ? 'text-ss-bordeaux' : ''}>{el.navText}</span>
        <span className="text-ss-bordeaux mt-[3px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </span>
      </Link>
    ))

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setNavOpen(false)
        }
      }
  
      if (navOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [navOpen])

  const openNavClassNames = `h-screen bg-ss-champagne absolute right-0 top-0 px-10 w-80 max-h-[800px] overflow-scroll drop-shadow-md z-40 transition-transform duration-500 ease-linear ${
    navOpen ? 'translate-x-0' : 'translate-x-full'
  }`

  return (
    <nav className="bg-ss-champagne h-10 flex items-center fixed top-0 left-0 w-screen z-30 shadow-lg">
        
        <div className="flex justify-between md:container">
          <Link href="/" className="w-6 h-6">
            <span className="fill-ss-black w-full h-full">
              <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path className="cls-1" d="m22.57,119.62s0,0,0,0c.31.21.68.27,1.04.15,2.24-.74,7.6-2.68,9.01-4.71,1.78-2.56,1.14-6.09-1.42-7.87-2.56-1.78-6.09-1.14-7.87,1.42-1.41,2.03-1.35,7.73-1.26,10.09.02.37.2.7.51.92Z"/>
                <path className="cls-1" d="m5.72,109.67c-2.34,2.06-2.58,5.64-.52,7.98,1.63,1.86,7.17,3.18,9.49,3.66.36.07.73-.02,1.01-.27,0,0,0,0,0,0,.28-.24.42-.6.4-.97-.18-2.35-.76-8.02-2.39-9.88-2.06-2.35-5.64-2.58-7.98-.52Z"/>
                <path className="cls-1" d="m24.74,124.79c-.36.11-.64.37-.77.71,0,0,0,0,0,0-.13.35-.09.73.11,1.04,1.26,1.99,4.43,6.72,6.75,7.6,2.92,1.11,6.19-.37,7.29-3.29,1.11-2.92-.37-6.19-3.28-7.29-2.31-.88-7.83.56-10.1,1.22Z"/>
                <path className="cls-1" d="m184.3,100.17c-7.89-9.79-21.11-17.57-39.33-23.14l-16.94-4.89c-12.41-4.22-21.91-8.86-28.21-13.81-6.15-4.82-9.26-11.43-9.26-19.64s3.56-14.95,10.89-19.59c7.37-4.66,15.32-7.02,23.65-7.02,9.06,0,15.92,1.65,20.39,4.91,4.52,3.3,9.19,9.1,13.89,17.25l13.47,23.87h5.2l2.34-42.22-.53-.28c-8.08-4.29-16.6-7.56-25.3-9.7-8.73-2.15-18.13-3.23-27.95-3.23-24.52,0-43.64,5.92-56.83,17.59-13.23,11.7-19.93,26.15-19.93,42.95,0,14.02,4.53,26.04,13.45,35.72,8.87,9.64,21.2,16.83,36.63,21.39l15.86,4.91c14.12,4.21,23.89,8.96,29.04,14.1,5.08,5.08,7.65,11.71,7.65,19.71,0,8.7-3.62,15.74-10.75,20.94-7.22,5.26-16.87,7.93-28.69,7.93-10.06,0-18.45-2.41-24.91-7.17-6.53-4.81-12.6-12.26-18.04-22.16l-13.1-23.11h-5.24l-.37,44.45c-17.54-11.48-27.91-29.46-31.74-54.43-.08-.51-.55-.87-1.06-.78-.51.08-.86.55-.78,1.06,6.24,40.62,29.29,63.16,71.81,69.59,7.15,1.29,14.87,1.95,23.07,1.95.8,0,1.57-.02,2.36-.03.9.01,1.78.03,2.7.03.14,0,.27-.04.39-.09,23.67-.74,42.51-6.34,56.06-16.7,14.64-11.2,22.06-26.3,22.06-44.89,0-13.73-4-25.67-11.9-35.48Z"/>
              </svg>
            </span>
          </Link>
          <div onClick={() => setNavOpen(!navOpen)} className="hover:cursor-pointer">
            {!navOpen && (
              <span className="z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </span>
            )}
          </div>
        </div>

        {navOpen && (
          <div className="bg-ss-gradient-dark opacity-70 w-screen h-screen absolute left-0 top-0 z-40"></div>
        )}
        <div ref={navRef} className={openNavClassNames}>
          <div onClick={() => setNavOpen(!navOpen)} className="hover:cursor-pointer">
            {navOpen && (
              <span className="inline-block mt-2.5 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </span>
            )}
          </div>

          {navOpen && (
            <div className="mt-2">
              <div className="flex flex-col items-end justify-around max-h-screen">
                {renderNavLinks}
              </div>
            </div>
          )}
        </div>

      </nav>
  )
}

export default NavItems
