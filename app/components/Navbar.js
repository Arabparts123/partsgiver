'use client'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav>
        <div className="flex justify-between mx-auto border-b-2 border-gray-200 shadow-gray-400 shadow-sm px-10 md:px-2 xs:px-3 xxs:px-3 py-3">
          <div className="text-4xl md:text-2xl xs:text-xl xxs:text-xl font-sans font-extrabold italic">
            PARTS<span className="text-heading">Giver</span>
          </div>
          <div className="ml-auto lg:hidden xl:hidden xxl:hidden md:hidden">
            {/* Hamburger menu button for mobile view */}
            <button
              className="text-xl block focus:outline-none"
              onClick={toggleNavbar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div>
            <ul className="flex flex-row space-x-7 xs:hidden xxs:hidden md:text-sm lg:text-sm">
              <li className="nav-item py-3  hover:underline">
                <Link
                  href={`https://www.facebook.com/emirates.auto.parts/`}
                  className=" hover:opacity-75"
                  aria-label="Facebook"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://www.instagram.com/emiratescar_parts/`}
                  className=" hover:opacity-75"
                  aria-label="Instagram"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://twitter.com/emiratescarpart`}
                  className=" hover:opacity-75"
                  aria-label="Twitter"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://emirates-car.tumblr.com/`}
                  className=" hover:opacity-75"
                  aria-label="Tumblr"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://emirates-car.tumblr.com/`}
                  className=" hover:opacity-75"
                  aria-label="Tumblr"
                >
                  Lorem
                </Link>
              </li>
            </ul>
          </div>

          <div className="xs:hidden xxs:hidden md:text-sm lg:text-sm">
            <button className="px-3 py-2 xs:py-2 md:px-2  text-white font-bold bg-gray-500 rounded-3xl">
              CTA button 1
            </button>
            &nbsp;&nbsp;
            <button className="px-3 py-2 xs:py-2 md:px-2  text-white font-bold bg-heading rounded-3xl">
              CTA button 2
            </button>
          </div>
        </div>
        <div>
          {/* Navbar links, collapsible on smaller screens */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            }  lg:flex lg:items-center xl:flex xl:items-center xl:w-auto xxl:flex xxl:items-center xxl:w-auto w-full xs:text-xl xxs:text-xl lg:w-auto bg-gray-800`}
          >
            <ul className="flex flex-row space-x-7 xxs:mx-2 xs:space-x-0 xs:items-center xxs:items-center xxs:space-x-0 xs:flex-col xxs:flex-col xs:h-screen  xxs:h-screen xxl:hidden lg:hidden xl:hidden md:hidden  text-white">
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://www.facebook.com/emirates.auto.parts/`}
                  className=" hover:opacity-75"
                  aria-label="Facebook"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://www.instagram.com/emiratescar_parts/`}
                  className=" hover:opacity-75"
                  aria-label="Instagram"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://twitter.com/emiratescarpart`}
                  className=" hover:opacity-75"
                  aria-label="Twitter"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://emirates-car.tumblr.com/`}
                  className=" hover:opacity-75"
                  aria-label="Tumblr"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <Link
                  href={`https://emirates-car.tumblr.com/`}
                  className=" hover:opacity-75"
                  aria-label="Tumblr"
                >
                  Lorem
                </Link>
              </li>
              <li className="nav-item py-3 hover:underline">
                <button className="px-3 my-3 py-2 xs:py-2 xs:mx-2 xxs:mx-2  text-white font-bold bg-gray-500 rounded-3xl">
                  CTA button 1
                </button>
                &nbsp;&nbsp;
                <br />
                <button className="px-3 py-2 xs:py-2 xs:mx-2 xxs:mx-2  text-white font-bold bg-heading rounded-3xl">
                  CTA button 2
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
