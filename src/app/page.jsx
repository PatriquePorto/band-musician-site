import Albums from '../components/albums/Albums'
import Biography from '../components/Biography'
import Blog from '../components/blog/Blog'
import Event from '../components/Event'
import Events from '../components/events/Events'
import ImageGallery from '../components/Gallery'
import Intro from '../components/Intro'
import Notice from '../components/Notice'
import Header from '../components/Header'
import Footer from '../components/Footer'

import VideoComponent from '../components/Video'


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Intro />
      <Notice />
      <Events />
      <Biography />
      <Albums />
      <ImageGallery />
      <VideoComponent />
      <Footer />
    </main>
  )
}
