import Header from '../../components/Header'
import Main from '../../components/Main'
import Notice from '../../components/Notice'
import Events from '../../components/events/Events'
import Biography from '../../components/Biography'
import Albums from '../../components/albums/Albums'
import ImageGallery from '../../components/Gallery'
import VideoComponent from '../../components/Video'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Main />
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
