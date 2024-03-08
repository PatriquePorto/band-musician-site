'use client'
import React from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { useTranslation } from "react-i18next";


const Notice = () => {
  return (
<section class="w-full h-full flex  items-center justify-center  sm:bg-center md:w-screen  md:bg-center ms:-mt-12  lg:bg-center xl:bg-cover xl:bg-center">

  <div className="container  mx-auto h-full flex items-center justify-center xl:justify-start">
    {/* image */}
    <div className="w-full h-full flex flex-col  items-center justify-center ms:mt-28 xs:mt-28 md:mt-36 xl:items-start z-20">
         
     
          {/* card */}
    <div className="w-full items-center justify-center mx-auto bottom-10 relative ">
       <div className="xl:-ml-0 ms:-ml-12 sm:-ml-0 md:ml-4">
          <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">{useTranslation().t("NOTICÍAS")}</h1>
            <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[350px] md:w-[98%] bg-white" />
        </div>      
       
       <div className="flex flex-row items-center xl:gap-14 md:gap-4 ms:gap-4 mt-8 ms:flex-col ms:w-[30rem] ms:-ml-28 md:w-[100%] md:-ml-0  xs:flex-col md:flex-row ">
     
       <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
       class="max-w-sm  bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image 
              className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
              src="/images/event-image.webp"
              alt="event"
              fill
            />
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{useTranslation().t("Show com a banda SleepWalkers no Hangar 110")}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">{useTranslation().t("Banda SleepWalkers tocando o melhor do Gothic/Metal, compareça!")}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Leia Mais
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
     </motion.div>

<motion.div 
   variants={fadeIn('up', 0.3)}
   initial="hidden"
   whileInView={'show'}
   viewport={{ once: false, amount: 0.4 }}
   class="max-w-sm bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image 
              className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
              src="/images/event-image.webp"
              alt="event"
              fill
            />
        <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{useTranslation().t("Show com a banda SleepWalkers no Inferno")}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">{useTranslation().t("Banda SleepWalkers tocando o melhor do Gothic/Metal, compareça!")}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Leia Mais
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
</motion.div>

      <motion.div 
           variants={fadeIn('left', 0.3)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.4 }}
          class="max-w-sm bg-primary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image 
                    className="rounded-t-lg w-[400px] h-[350px]  object-cotain"
                    src="/images/event-image.webp"
                    alt="event"
                    fill
                  />
              <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{useTranslation().t("Show com a banda SleepWalkers no Manifesto")}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">{useTranslation().t("Banda SleepWalkers tocando o melhor do Gothic/Metal, compareça!")}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Leia Mais
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
        </motion.div>
       </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Notice