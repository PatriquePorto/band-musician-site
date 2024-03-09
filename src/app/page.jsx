'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import IntroImg from '../../public/images/Sleepwalkers.png'
import BrasilImg from '../../public/images/brazil.png'
import UsaImg from '../../public/images/usa.png'
import { useTranslation } from 'react-i18next'
import '../i18n'

function Home() {

   const { t, i18n: { changeLanguage, language} } = useTranslation()

   const [currentLanguage, setCurrentLanguage] = useState(language);

   const handleLanguageChange = (newLanguage) => {

    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    
  };
  

  return (
   
    <main className="overflow-x-hidden">
    <div className="bg-image w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
      <Image className="inset-0 brightness-75 w-full h-full object-fill object-center md:w-full md:h-full 2xl:w-full 2xl:h-full lg:w-full lg:h-full sm:max-w-200 sm:max-h-100 " 
        src={IntroImg} 
        alt="Band image"
        width={300}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 480px) 50vw, 100hv"
        />

  <div className="w-full absolute  bottom-28 flex items-center justify-center  md:flex md:items-center md:justify-center">
    {/* Parent container */}

      {/*   <div>

        <button type='button' onClick={handleLanguageChange}>Change Language</button>
      </div> */}
    

        <Link href="./website">
          <div 
           
          className="flex flex-col pr-24">
          
                  <Image 
                    onClick={() => handleLanguageChange('pt-BR')}
                    className="w-12 h-12 md:w-full md:h-full" 
                      src={BrasilImg} 
                      width={100} 
                      height={100} 
                      objectFit="cover" 
                      quality={100} 
                      alt="Brazil image" 
                  />

            <div className="2xl:text-3xl lg:text-3xl md:text-3xl font-bold">
              ENTRAR
            </div>
          </div>
        </Link>

        <Link href="./website">
          <div 
          
          className="flex flex-col ">
            <Image 
            onClick={() => handleLanguageChange('en-US')}
            className="w-12 h-12 md:w-full md:h-full" 
            src={UsaImg} 
            width={100} 
            height={100} 
            objectFit="cover" 
            quality={100} 
            alt="USA image" />
            <div className="2xl:text-3xl lg:text-3xl md:text-3xl font-bold">
              ENTER
            </div>
          </div>
        </Link>

        <div className="absolute top-40 text-1xl text-white font-bold">
          ® Official SleepWalkers Website - All Rights Reserverd 2023
        </div>

  </div>
</div>
    </main>
    
  )

    }
export default Home
