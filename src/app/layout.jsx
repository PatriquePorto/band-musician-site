import { Alex_Brush, Montserrat } from 'next/font/google'
import './globals.css'

//Components


//Context Provider
import NavContextProvider from '../context/NavContext'

const alexBrush = Alex_Brush({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alex-brush', 
})

const montSerrat = Montserrat({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat', 
})

export const metadata = {
  title: 'SleepWalkers || Official Website',
  description: 'SleepWalkers is a music band based in São Paulo Brazil.',
}

export default function RootLayout({ children }) {
  return (
    <NavContextProvider>
           <html lang="pt-BR">
      <body className={`${alexBrush.variable} ${montSerrat.variable}
      overflow-x-hidden relative`}>  
      
        {children}   
      
     </body>
    </html>
    </NavContextProvider>

  )
}
