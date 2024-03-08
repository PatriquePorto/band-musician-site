
import React from 'react'
import Navbar from './components/Navbar'
import { fetchProducts } from './actions'
import InfiniteScroll from './components/InfiniteScroll'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import Hydrate from './components/Hydrate'
import BandImg from './components/BandImg'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'SleepWalkers || Store',
  description: 'SleepWalkers is a music band based in São Paulo Brazil.',
}


const Page = async () => {
  const { formatedProducts } = await fetchProducts({})

  return (
    <ClerkProvider localization={ptBR}>
    <React.Fragment>  
      <div>
      <Hydrate>
        <Navbar />
       <BandImg />
        <div className='max-w-7xl mx-auto pt-20 px-8 xl:px-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6  '>

         <InfiniteScroll initialProducts={formatedProducts} />
        </div>
        <ToastContainer position="bottom-right" theme="dark" autoClose={2000} />
      </div>
      </Hydrate>   
      <Footer />
      </div>   
    </React.Fragment>
    </ClerkProvider>
  )
}

export default Page