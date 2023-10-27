'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

// Components
import NavMobile from "./NavMobile"
import Nav from "./Nav"
import MenuBtn from "./MenuBtn"

const Header = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll
      setActive(window.scrollY > 100)
    }
     // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Clear event listener
    return () => { 
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed z-50 w-full transition-all ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
       <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
           {/* Logo */}
           <Link
               href="#"
               className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
           >
               <Image
                   src="/assets/header/logo.svg"
                   fill
                   className="object-contain"
                   alt="logo"
               />
           </Link>
           {/* Nav */}
           <Nav containerStyles='hidden xl:flex items-center gap-x-8' />
           {/* Nav mobile */}
           <NavMobile />
           {/* Menu btn */}
           <div>
               <MenuBtn />
            </div>
           {/* Social */}
           <div>social icons</div>
       </div>
    </header>
  )
}

export default Header