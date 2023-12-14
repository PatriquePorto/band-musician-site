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
import Socials from "./Socials"

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
   
    <header className={`fixed z-50 w-full  transition-all bg-black py-2`}>
         {/* <header className={`fixed z-50 w-full  transition-all ${active ? 'bg-[#030315] py-4' : 'bg-transparent py-2'}`}> */}
       <div className="container  mx-auto flex flex-col xl:flex-row items-center justify-between">
           {/* Logo */}
           <Link
               href="#"
               className="relative flex w-[200px] h-[40px] transition-all ms:transition-none mb-2 xl:mb-0"
           >
               <Image
                   src="/images/logo2.png"
                   fill
                   className="object-contain"
                   alt="logo"
               />
           </Link>
           {/* Nav */}
           <Nav containerStyles='hidden xl:flex items-center gap-x-4' />
           {/* Nav mobile */}
           <NavMobile />
           {/* Menu btn */}
           <div className="absolute right-7 top-9 z-10 xl:hidden">
               <MenuBtn />
            </div>
           {/* Social */}
           <div>
              <Socials
                  containerStyles='flex text-[24px] xl:gap-x-2 ms:gap-x-4 gap-x-4'
                  iconStyles='hover:scale-125 transition-all'
              />
           </div>
       </div>
    </header>
  )
}

export default Header