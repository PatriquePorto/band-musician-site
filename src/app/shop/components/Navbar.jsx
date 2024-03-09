'use client'

import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { SignInButton, UserButton } from '@clerk/nextjs'
import Cart from './Cart'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
 
  return (
    <nav className='fixed top-0 w-full h-[60px] flex items-center py-2 px-8 justify-between  bg-slate-800 text-gray-300 z-50'>

    <Link href='/shop'
          className='uppercase font-bold text-md h-12 flex items-center'
    >
     SleepWalkers Store
     </Link>

       <div className='flex items-center gap-8'>
          <Cart/>
        <div>
          <SignedIn>
              <UserButton afterSignOutUrl='/shop' />
            </SignedIn>
            <SignedOut redirectUrl='/shop'>
               <SignInButton mode='modal' redirectUrl='/shop' >
                  <button className='border rounded-md border-gray-400 px-3 py-2'>
                     { useTranslation().t('Fazer Login')}
                  </button>
               </SignInButton>
            </SignedOut>
        </div>      
       </div>
    </nav>
  )
}

export default Navbar