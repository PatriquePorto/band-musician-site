import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import Events from './events/Events'
import EventBox from './events/EventBox'
const Event = () => {
  return (
    <section className="h-[80vh] bg-slate-800 xl:h-[300px]" id="agenda">
      
    <div className="container mx-auto h-full  flex items-center justify-center xl:justify-start">
         
      <div className='mb-20'>
       
       
        <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] font-bold pb-2 ">Agenda</h1>
        <hr className="w-[1263px] h-[3.5px] bg-white mb-5"  />
           
       </div>

      
    </div>
  </section>
  )
}

export default Event