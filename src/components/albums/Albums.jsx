'use client'

import AlbumSlider from "./AlbumSlider"
import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"
import { useTranslation } from "react-i18next"
import SectionHeader from "../SectionHeader"

const Albums = () => {
  return (
    <section id="discography" className="mt-10">
          <div className="container ms:-mt-14 mx-auto h-full  flex items-center justify-center xl:justify-start">
         
          <div className='w-full items-center justify-center mx-auto mt-16'>  

          <div className="xl:-ml-0 ms:-ml-12 sm:-ml-0 md:ml-4">
          <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">{useTranslation().t('Discografia')}</h1>
            <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[350px] md:w-[98%] bg-white" />
        </div>  

              </div>
       
          </div>
        <div className="xl:container mx-auto ms:w-[95%] ">
            <SectionHeader />
            {/* Album Slider */}
            <motion.div
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: false, amount: 0.3 }}
             >
                <AlbumSlider />
            </motion.div>
        </div>
    </section>
   
  )
}

export default Albums