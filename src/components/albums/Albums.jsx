'use client'

import AlbumSlider from "./AlbumSlider"
import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"

import SectionHeader from "../SectionHeader"

const Albums = () => {
  return (
    <section id="discography" className="mt-10">
          <div className="container mx-auto h-full  flex items-center justify-center xl:justify-start">
         
              <div className='w-full items-center justify-center mx-auto mt-16'>  
                  <h1 className="uppercase text-[2.5rem]  font-bold ">Discografia</h1>
                  <hr className="w-[1263px] h-[3.5px] bg-white mb-5"  />
              </div>
       
          </div>
        <div className="container mx-auto">
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