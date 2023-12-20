
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { ClerkProvider } from '@clerk/nextjs/app-beta'
import { ptBR } from '@clerk/localizations'

export const metadata = {
  title: 'SleepWalkers || Store',
  description: 'SleepWalkers is a music band based in São Paulo Brazil.',
}

const  Page = () => {
  return (
    <ClerkProvider localization={ptBR}>
    <React.Fragment>  
      <div>
      <Navbar />
      <Main />
      </div>   
    </React.Fragment>
    </ClerkProvider>
  )
}

export default Page