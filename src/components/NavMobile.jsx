import React, { useContext} from 'react'
import { NavContext } from '../context/NavContext'

import { RiCloseLine } from 'react-icons/ri'

//Components
import Nav from './Nav'

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext)
  return (
    <nav className={`${isOpen ? 'right-0' : '-right-full'}
     xl:hidden fixed bg-black w-full  top-0 z-20 bottom-0 transition-all duration-500`}>
       <div 
        onClick={() => setIsOpen(false)}
        className='absolute right-4 top-5 cursor-pointer'>
          <RiCloseLine className='text-5xl'/>
       </div>
       <Nav containerStyles='flex flex-col justify-center  items-center h-full text-[30px] uppercase font-bold bg-pink-500/10
        gap-y-8 ' />
    </nav>
  )
}

export default NavMobile