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
    path: 'shop',
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
        {links.map((link, index) => {
           return (
            <Link 
               to={link.path}
               className={`${linkStyles} text-[1.4rem] cursor-pointer scale-y-150 tracking-tighter  border-b-2 hover:bg-blue-500/100 border-transparent uppercase font-bold`}
               key={index}
               smooth={!isDesktop ? false : true}
               spy
               offset={-50}
               activeClass="active"
               >
                {link.name}
            </Link>
           )
        })}
    </nav>
  )
}

export default Nav