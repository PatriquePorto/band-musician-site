"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useTranslation } from 'react-i18next';

import Gallery1 from '../../public/images/gallery-1.jpeg';
import Gallery2 from '../../public/images/gallery-2.jpeg';
import Gallery3 from '../../public/images/gallery-3.jpeg';
import Gallery4 from '../../public/images/gallery-4.jpeg';
import Gallery5 from '../../public/images/gallery-5.jpeg';
import Gallery6 from '../../public/images/gallery-6.jpeg';
import Gallery7 from '../../public/images/gallery-7.jpeg';
import Gallery8 from '../../public/images/gallery-8.jpeg';

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
    };
  
    const handleCloseClick = () => {
      setSelectedImage(null);
    };

    // Array of objects with image and index
    const galleryItems = [
      { image: Gallery1, index: 0 },
      { image: Gallery2, index: 1 },
      { image: Gallery3, index: 2 },
      { image: Gallery4, index: 3 },
      { image: Gallery5, index: 4 },
      { image: Gallery6, index: 5 },
      { image: Gallery7, index: 6 },
      { image: Gallery8, index: 7 },
      // Add more images and their corresponding indexes
    ];

  return (
    
    <section id="photos" className="xl:mt-20 ms:mt-10">
    <div className="container mx-auto h-full  flex items-center justify-center xl:justify-start">
   
    <div className="xl:-ml-0 ms:-ml-4 sm:-ml-0 md:ml-4 md:flex-1">
          <h1 className="uppercase xl:text-[2.5rem] md:text-[2rem] sm:text-[2rem]  font-bold pb-2">{useTranslation().t('Fotos')}</h1>
            <hr className="w-[1263px] h-[3.5px] xl:w-[1263px] ms:w-[350px] md:w-[98%] bg-white" />
        </div>     
 
    </div>
        

    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">

        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ms:grid-cols-2 gap-4">
            {galleryItems.map((item) => (
              <div className="gallery-item rounded-3xl object-fill transition ease-in-out delay-150 hover:scale-110 " key={item.index}>
                <div onClick={() => handleImageClick(item.image.src)}>
                  <Image
                    src={item.image}
                    width={500}
                    height={800}
                    alt={`Image ${item.index}`}
                    className="w-full h-auto cursor-pointer"
                  />
                </div>
              </div>
            ))}
          {/* ... Rest of the gallery items */}
        
        </motion.div>

  {selectedImage && (
        <div className=" fixed w-full h-full mt-12 flex items-center justify-center lg:w-2/4 lg:h-5/6 inset-0 sm:w-2/4 sm:h-5/6 sm:inset-1/4 sm:top-12  z-50">
          
          <Image
              className='w-full h-full xl:w-full xl:h-full '
              src={selectedImage}
              layout='fill'
              quality={100}
              alt="Selected Image"
            />
          <button
            className="top-4 right-4 absolute inline-flex items-center justify-center p-2 text-blue-500 rounded-full text-2xl"
            onClick={handleCloseClick}
          >
            x
          </button>
               
        </div>
      )}
      </div>
    </section>
  );
}

export default ImageGallery;