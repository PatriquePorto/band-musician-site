
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

export const metadata = {
  title: 'SleepWalkers || Store',
  description: 'SleepWalkers is a music band based in São Paulo Brazil.',
}

const  Page = () => {
  return (
    <React.Fragment>  
      <div>
      <Navbar />
      <Main />
      </div>   
    </React.Fragment>
  )
}

export default Page