import Link from "next/link"

import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiFacebookBoxFill} from "react-icons/ri"

const socials = [
    { path: 'https://www.youtube.com/@SleepwalkersMetal', icon: <RiYoutubeFill />, color: '#FF0000' },
    { path: 'https://www.instagram.com/sleepwalkers_br_official/', icon: <RiInstagramFill />, color: '#e1306c' },
    { path: 'https://open.spotify.com/intl-pt/artist/2MyDKofc2Kb6h9ijufPaaU', icon: <RiSpotifyFill />, color: '#1DB954' },
    { path: 'https://www.facebook.com/sleepwalkersbrasil', icon: <RiFacebookBoxFill />, color: '#0165E1' }
]


const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`} >
        {socials.map((social, index) => {
           return (
            <Link href={social.path} target="_blank" rel="noopener noreferrer" key={index} >
                <div className={`${iconStyles}`} style={{ color: social.color }}> {social.icon}</div>
            </Link>
           )
        })}
    </div>
  )
}
export default Socials