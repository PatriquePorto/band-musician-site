'use client'
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { fadeIn } from "../../../variants"
//Icons
import { RiMapPin2Fill } from "react-icons/ri"

const EventBox = ({ events }) => {
  
  return (
    <>
  <section className="section bg-secondary/60 " id="agenda" >
       <div className="container w-full mx-auto h-full flex items-center justify-center xl:justify-start">
         
         <div className='w-full items-center ms:-mt-8 justify-center mx-auto mb-20'>
          
          <div className="xl:-ml-0 ms:-ml-12 sm:-ml-0 md:ml-4">
          <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">{useTranslation().t('agenda')}</h1>
            <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[350px] md:w-[98%] bg-white" />
        </div>    
       
              
          </div>
   
         
       </div>
        
     </section>
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={'show'} 
      viewport={{ once: false, amount: 0.2 }}
      className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
        <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
            {/* Image */}
            <div className="hidden xl:flex w-[400px]">
                <Image
                  src={'/images/gallery-1.jpeg'}
                  width={358}
                  height={500}
                  priority
                  quality={100}
                  alt=""
                />
            </div>
            {/* Event List*/}
            <div className="flex-1 h-[500px]  flex flex-col justify-between
             overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10 xl:pr-6 ">
                {/* Event Item */}
               {events.map((event) => { 
                   return ( 
                    
                   <div key={event.id}
                        className="flex flex-col xl:flex-row justify-between items-center gap-y-4 xl:gap-y-0 text-center
                        xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none
                        first-of-type:pt-0"
                     >
                        <div className="flex flex-col xl:flex-row items-center gap-x-4">
                            {/* Day & Month */}
                              <div className="flex flex-col justify-center items-center leading-tight w-[80px]
                              mb-4 xl:mb-0 ">
                                 <div className="text-[44px] font-black text-accent" >
                                    {event.date.day}
                                  </div>
                                 <div className="text-[20px] font-extrabold">
                                    {event.date.month}
                                  </div>
                              </div>
                            {/* Location */}
                            <div className="w-64 flex flex-col gap-y-2">
                                <div className="text-lg leading-none font-bold">
                                 {/* {`${event.location.city}, ${event.location.state}`} */} 
                                 <p>{useTranslation().t('Datas e Locais')}</p>
                                </div>
                                <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                                    <div className="text-accent text-lg">
                                        <RiMapPin2Fill />
                                    </div>
                                  <div className="font-light" >
                                    {/*{event.location.address}*/ }
                                    <p>{useTranslation().t('A confirmar!')}</p>
                                    </div>
                              </div>
                            </div>
                        </div>
                        {/* Price Range */}
                        <div className="w-[100px] text-[17px] text-center text-accent font-bold">
                          {event.priceRange}
                        </div>
                        {/* Button */}
                        <button className="btn btn-sm btn-accent">{useTranslation().t('Ingressos')}</button>
                    </div>
                    )
                })}
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default EventBox