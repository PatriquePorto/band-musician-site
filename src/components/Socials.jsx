import Link from "next/link"

import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from "react-icons/ri"

const socials = [
    { path: 'https://www.youtube.com', icon: <RiYoutubeFill />, color: '#FF0000' },
    { path: 'https://www.instagram.com', icon: <RiInstagramFill />, color: '#e1306c' },
    { path: 'https://open.spotify.com', icon: <RiSpotifyFill />, color: '#1DB954' },
    { path: 'https://soundcloud.com', icon: <RiSoundcloudFill />, color: '#FF8800' }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
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