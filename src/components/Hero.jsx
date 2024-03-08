'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


const Hero = () => {
  return (
<section className="w-full h-full xl:h-[1700px]" id="home">
  <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
    {/* image */}
    <div className="h-full flex flex-col mt-16 w-full items-center justify-center xl:items-start z-20 pt-12">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
           className="md-w[500px]"
          >
          <Image 
            className="w-full h-full object-cover"
            src="/images/band-intro.png"
            alt="hero"
            width={1250}
            height={300}
          />
          <div className=" flex items-center justify-center" >
              <Image 
                  className="flex w-full h-full object-cover -top-[200px] z-10 logo"
                  src="/images/logo2.png"
                  alt="hero"
                  width={600}
                  height={200}
                />
          </div>
   
          </motion.div>
     
          {/* card */}
    <div className="w-full items-center justify-center relative -top-[8%]">      
        <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] font-bold pb-2">Notícias</h1>
        <hr className="w-[1263px] h-[3.5px] bg-white" />
       <div className="flex flex-row items-center gap-14 mt-8 ">
     
                <motion.div 
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                
                  className="max-w-sm p-6 h-[550px] bg-black border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
                      </a>
                      <div className="w-500 h-350 ">
                      <Image 
                        className="w-[350px] h-[320px]"
                        src="/images/event-image.webp"
                        alt="hero"
                        fill
                      />
                      </div>
                    
                      <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Band SleepWalkers tocando o melhor do Heavy Metal pra agitar a galera, compareça!</p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Leia mais
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </a>
                </motion.div>

                <motion.div 
                      variants={fadeIn('up', 0.3)}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.3 }}
                
                  className="max-w-sm p-6 h-[550px] bg-black border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
                      </a>
                      <div className="w-500 h-350 ">
                      <Image 
                        className="w-[350px] h-[320px]"
                        src="/images/event-image.webp"
                        alt="hero"
                        fill
                      />
                      </div>
                    
                      <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Band SleepWalkers tocando o melhor do Heavy Metal pra agitar a galera, compareça!</p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Leia mais
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </a>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-sm p-6 h-[550px] bg-black border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
                      </a>
                      <div className="w-500 h-350 ">
                      <Image 
                        className="w-[350px] h-[320px]"
                        src="/images/event-image.webp"
                        alt="hero"
                        fill
                      />
                      </div>
                    
                      <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Band SleepWalkers tocando o melhor do Heavy Metal pra agitar a galera, compareça!</p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Leia mais
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                      </a>
                </motion.div>
           </div>
        </div>

    </div>

  </div>
</section>
  )
}

export default Hero