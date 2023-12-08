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
       <div className="container w-full mx-auto h-full flex items-center justify-center xl:justify-start">
         
         <div className='w-full items-center justify-center mx-auto mb-20'>
          
          
           <h1 className="uppercase text-[2.5rem]  font-bold ">Agenda</h1>
           <hr className="w-[1263px] h-[3.5px] bg-white mb-5"  />
              
          </div>
   
         
       </div>
        <div className="w-full mx-auto">
          <SectionHeader/>
            {/* Event Box */}
            <EventBox events={events} />
        </div>
     </section>
  )
}

export default Events