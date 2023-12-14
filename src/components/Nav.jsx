'use client'

import NextLink from 'next/link'
import { Link } from "react-scroll"
import { useMediaQuery } from "react-responsive"

const links = [
  {
    path: 'home',
    name: 'Home' 
  },
  {
    path: 'agenda',
    name: 'Agenda'
  },
  {
    path: 'biography',
    name: 'Biografia'
  },
  {
    path: 'discography',
    name: 'Discografia'
  },
  {
    path: '/shop',
    name: 'Loja'
  },
  {
    path: 'photos',
    name: 'Fotos'
  }
  ,
  {
    path: 'videos',
    name: 'Vídeos'
  }
  ,
  {
    path: 'contact',
    name: 'Contato'
  }

]

const Nav = ({containerStyles, linkStyles}) => {
   const isDesktop = useMediaQuery({ 
    query: "(min-width: 1310px)" 
   })

  return (

    <nav className={`${containerStyles}`}>
  {
      links.map((link, index) => {
        if (link.name === 'Loja') {
          return (
            <NextLink href={link.path} 
            target="_blank" rel="noopener noreferrer"
            className={`${linkStyles} text-[1.25rem] px-1 cursor-pointer scale-y-150 tracking-tighter bg-red-500 rounded-lg  hover:bg-blue-500/100 border-transparent uppercase font-bold`} key={index}   >
              {link.name}
            </NextLink>
          );
    } else {
      return (
        <Link
          to={link.path}
          className={`${linkStyles} text-[1.25rem] cursor-pointer scale-y-150 tracking-tighter  border-b-2 rounded hover:bg-blue-500/100 border-transparent uppercase font-bold`}
          key={index}
          smooth={!isDesktop ? false : true}
          spy
          offset={-50}
          activeClass="active"
        >
          {link.name}
        </Link>
      );
    }
  })
}
    </nav>
  )
}

export default Nav
