'use client'

import { useState } from "react"

import useSWR from "swr"
import Image from "next/image"

import { AudioPlayer } from "react-audio-play"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const fetcher = (url) => fetch(url).then((res) => res.json())

const AlbumSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const { data, error } = useSWR('https://json-sleepwalkers.vercel.app/albums', fetcher) //http://localhost:4000/albums https://json-sleepwalkers.vercel.app/albums
 
  if (error) return 'Failed to fetch data'
  if (!data) return 'Loading...'

  return (
    <>
       {/* Top Slider*/}
       <Swiper
         effect={'coverflow'}
         speed={1000}
         spaceBetween={80}
         allowTouchMover={false}
         thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, }}  
         modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
         className="album-slider">
          {data.map((album) => {
            return (
            <SwiperSlide key={album.id} className="">
               <div className="w-full bg-secondary/80 xl:w-[96.7%] ms:w-[100%] rounded-[10px] flex flex-col xl:flex-row items-center
                  p-6 xl:p-12 gap-x-12 ">
                  {/* Image */}
                  <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative
                                 cursor-pointer rounded-[10px] overflow-hidden ">
                          <Image 
                          src={album.img} 
                          fill
                          priority
                          alt=""
                          className="object-contain"
                      />
                  </div>
                  {/* Track Container */}
                  <div className="flex flex-1 w-full h-[500px]">
                     {/* Track List */}
                    <div className="flex-1 flex flex-col xl:px-12">                 
                     {album.tracks?.map((track, index) => {
                        return (
                        <div className="flex flex-1 w-full h-[500px]"
                          key={index}>
                          {/* Track Name */}
                           <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold"> 
                              <div className="text-accent text-sm xl:text-lg ms:text-[.6rem]">0{index + 1}.</div>
                              <div className="text-sm  xl:text-base ms:text-[.6rem]">{track.name}</div>
                            </div>
                           {/* Player */}
                          <div>
                            <AudioPlayer
                              src={track.src}
                              loop
                              preload="none"
                              color="#7F1CFC"
                              sliderColor="#7F1CFC"
                              style={{
                                background: 'transparent',
                                maxWidth: '100%',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                
                              }}
                              volume={50}
                              volumePlacement="bottom"
                              className="album-player"
                            />
                          </div>
                        </div>
                       )
                     })}
                  </div>
                 </div>
               </div>
            </SwiperSlide>     
            )      
          })}    
       </Swiper>    
       {/* Thumb Slider */}
       <Swiper
         onSwiper={setThumbsSwiper}
         modules={[FreeMode, Navigation, Thumbs]}
         breakpoints={{
           320: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           425 : {
             slidesPerView: 2,
             spaceBetween: 30,
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 30,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 30,
           },
           1310: {
             slidesPerView: 5,
             spaceBetween: 30,
           },
         }}
         spaceBetween={20}
         slidesPerView={5}
         freeMode={true}
         watchSlidesProgress={true}
         className="thumb-slider mt-6"
        >
          {data.map((thumb, index) => {
            return (
              <SwiperSlide
              key={index}
              className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
            >
              {/* image */}
              <div className="relative w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] md:w-[220px] md:max-h-[220px] cursor-pointer ">
                <Image
                  className="object-contain group-hover:scale-105 transition-all duration-300 rounded-[10px]"
                  src={thumb.img}
                  fill
                  priority
                  alt="thumb"
                />
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
    </>
    
  )
}

export default AlbumSlider