'use client'

import Image from 'next/image'
import React from 'react'
import IntroImg from '../../public/images/bg.png'
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"	

const Main = () => {
  return (

<div className="bg-image w-screen h-screen overflow-hidden flex flex-col justify-center items-center" id='home'>
      <Image className="inset-0  w-full h-full object-fill object-center md:w-full md:h-full 2xl:w-full 2xl:h-full lg:w-full lg:h-full sm:max-w-200 sm:max-h-100 " 
        src={IntroImg} 
        alt="Band image"
        width={300}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 480px) 50vw, 100hv"
        />

  <div className="xl:w-[45%] xl:h-[540px]  sm:w-[80%] sm-h-[200px] xs:w-[80%] ms:w-[70%] ms:h-[300px] md:w-[45%] md:h-[350px] md:flex md:items-center md:justify-center lg:w-[65%] lg:h-[650px] absolute flex items-center justify-center">
    {/* Parent container */}
       
    <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
           className="w-[450px] h-[500px] ms:w-full flex-col mx-auto items-center justify-center xl:justify-start"
          >
            {/*     <Image 
            className="object-fit"
            src="/images/band-intro.png"
            alt="hero"
          fill
          /> */}
      
          <div className=" flex items-center justify-center  xl:mt-[23%] xl:h-[250px] xl:w-[100%] xl:ml-0 md:w-[70%] md:mt-[80%] ms:mt-56 ms:w-[200px] ms:ml-9" >
              <Image 
                  className="flex xs:mt-16 ms:mt-28 object-cover z-10"
                  src="/images/logo2.png"
                  alt="hero"
                  width={600}
                  height={200}
                />
          </div>
   
      </motion.div>
       
  </div>

</div>
 
  )
}

export default Main