'use client'

import NextLink from 'next/link'
import { Link } from "react-scroll"
import { useMediaQuery } from "react-responsive"
import { useTranslation } from 'react-i18next'

const Nav = ({containerStyles, linkStyles}) => {

  const { t } = useTranslation()

  const links = [
    {
      path: 'home',
      name: t('home') 
    },
    {
      path: 'agenda',
      name: t('agenda')
    },
    {
      path: 'biography',
      name: t('biografia')
    },
    {
      path: 'discography',
      name: t('discografia')
    },
    {
      path: '/shop',
      name: t('loja')
    },
    {
      path: 'photos',
      name: t('fotos')
    }
    ,
    {
      path: 'videos',
      name: t('videos')
    }
    ,
    {
      path: 'contact',
      name: t('contato')
    }
  
  ]

   const isDesktop = useMediaQuery({ 
    query: "(min-width: 1310px)" 
   })

  return (

    <nav className={`${containerStyles}`}>
  {
      links.map((link, index) => {
        if (link.name === 'LOJA' | link.name === 'SHOP') {
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
