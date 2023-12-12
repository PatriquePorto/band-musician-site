'use client'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


const Hero = () => {
  return (
<section className="w-full h-full flex bg-[url('/images/bg.png')] bg-[length:200px_100px] xl:bg-cover lg:bg-center lg:bg-cover bg-center bg-no-repeat items-center justify-center xs:bg-cover xs:bg-center" id="home">

  <div className="container  mx-auto h-full flex items-center justify-center xl:justify-start">
    {/* image */}
    <div className="w-full h-full flex flex-col  items-center justify-center ms:mt-28 xs:mt-28 md:mt-36 xl:items-start z-20">
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
           className="md:w-3/4 ms:w-full flex-col mx-auto items-center justify-center xl:justify-start"
          >
          <Image 
            className="w-full h-full object-cover"
            src="/images/band-intro.png"
            alt="hero"
           fill
          />
          <div className=" flex items-center justify-center" >
              <Image 
                  className="flex w-full h-full xs:mt-16 ms:mt-28 object-cover -top-[10rem] z-10 logo"
                  src="/images/logo2.png"
                  alt="hero"
                  width={600}
                  height={200}
                />
          </div>
   
          </motion.div>
     
          {/* card */}
    <div className="w-full items-center justify-center mx-auto bottom-10 relative ">      
        <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] font-bold pb-2">Notícias</h1>
        <hr className="w-[1263px] h-[3.5px] bg-white" />
       <div className="flex flex-row items-center gap-14 mt-8 ms:flex-col xs:flex-col md:flex-row ">
     
       <div class="max-w-sm  bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image 
              className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
              src="/images/event-image.webp"
              alt="event"
              fill
            />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
              </a>
              <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Band SleepWalkers tocando o melhor do Gothic/Metal na integra, compareça!.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Leia Mais
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
     </div>

<div class="max-w-sm bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image 
              className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
              src="/images/event-image.webp"
              alt="event"
              fill
            />
        <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
              </a>
              <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Band SleepWalkers tocando o melhor do Gothic/Metal na integra, compareça!.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Leia Mais
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
</div>

<div class="max-w-sm bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <Image 
              className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
              src="/images/event-image.webp"
              alt="event"
              fill
            />
        <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">Show com a banda SleepWalkers no Hangar 110</h5>
              </a>
              <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Band SleepWalkers tocando o melhor do Gothic/Metal na integra, compareça!.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Leia Mais
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero