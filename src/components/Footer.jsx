'use client'

import Link from "next/link"
import Socials from "./Socials"
import Image from "next/image"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"	
const Footer = () => {
  return (
    <footer id="contact" className="bg-primary section h-[500px] xl:h-auto" >
      
       <div className="container xl:mt-0 ms:mt-10 mx-auto h-full flex flex-col items-center gap-y-8">
           {/* Email Link */}
          <motion.div
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.3 }}
           >
              <Link href='#'>
                  <h2 className="text-[24px] lg:text-[38px] ms:text-[1rem] font-semibold leading-tight">sleepwalkers_brazil@gmail.com</h2>
              </Link>
          </motion.div>
       {/* Nav */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
        
        </motion.div>
        {/* Socials */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
            <Socials 
               containerStyles='flex text-[24px] gap-x-8'
               iconStyles='hover:text-primary/80 hover:scale-125 transition-all justify-center'
            />
        </motion.div>
        {/* Logo */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
           <Link
             href='#'
             className="relative w-[200px] h-[80px] flex transition-all"
           >
               <Image 
                  src={'/images/logo2.png'}
                  fill
                  className="object-contain w-56 h-72"
                  alt="logo"
                />
           </Link>
         
        </motion.div>
        <motion.div
             variants={fadeIn('up', 0.8)}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.3 }}
             className="w-[400px] flex justify-center"
         >
               <h4 className="font-bold text-xs xl:text-xs ms:text-[0.7rem]">
                © SLEEPWALKERS - Offcial Website - All Rights Reserved 2023</h4>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer