import SectionHeader from "../SectionHeader"
import EventBox from "./EventBox"

const getEvents = async () => {
    const res = await fetch('https://json-sleepwalkers.vercel.app/events') //http://localhost:4000/events  https://json-sleepwalkers.vercel.app/events'
    return res.json()
}

const Events = async () => {
  const events = await getEvents()
  return (
     <section className="section bg-secondary/60 " id="agenda" >
      {/*        <div className="container w-full mx-auto h-full flex items-center justify-center xl:justify-start">
         
         <div className='w-full items-center ms:-mt-8 justify-center mx-auto mb-20'>
          
          
         <div className="xl:-ml-0 ms:-ml-12 sm:-ml-0 md:ml-4">
          <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">Agenda</h1>
            <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[350px] md:w-[98%] bg-white" />
        </div>    
              
          </div>
   
         
       </div> */}

        <div className="w-full mx-auto">
          <SectionHeader/>
            {/* Event Box */}
            <EventBox events={events} />
        </div>
     </section>
  )
}

export default Events

