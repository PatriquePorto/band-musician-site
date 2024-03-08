'use client'

import Image from 'next/image'
import React from 'react'

const BandImg = () => {
  return (

<div className="bg-image w-screen h-[600px] overflow-hidden flex flex-col justify-center items-center">
  

  <div className="xl:w-[45%] xl:h-[440px] top-[5%] sm:w-[80%] sm-h-[200px] xs:w-[80%] ms:w-[70%] ms:h-[300px] md:w-[45%] md:h-[350px] md:flex md:items-center md:justify-center lg:w-[65%] lg:h-[450px] absolute flex items-center justify-center">
    {/* Parent container */}
       
    <div
         className="w-[400px] h-[350px] ms:w-full flex-col mx-auto items-center justify-center xl:justify-start"
          >
           <Image 
                  className="flex xs:mt-16 ms:mt-28 object-cover z-10"
                  src="/images/logo2.png"
                  alt="hero"
                  width={850}
                  height={200}
                />

<div
           className='flex w-[400px] pb-4 h-[350px] ms:w-full flex-col mx-auto items-center justify-center xl:justify-start'
          >
              <h2 className=' font-bold text-teal-600'>Official Store</h2>
          </div>
          
           <div className=" flex items-center justify-center  xl:mt-[23%] xl:h-[250px] xl:w-[100%] xl:ml-0 md:w-[70%] md:mt-[80%] ms:mt-56 ms:w-[200px] ms:ml-9" >
          
          </div>

     
   
      </div>
       
  </div>

</div>
 
  )
}

export default BandImg