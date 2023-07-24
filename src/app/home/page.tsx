'use client'
import Hero from '../sections/hero';
import Contact from '../sections/contact';
import Footer from '../sections/footer';
import Video from '../sections/video';
import TawkToWrapper from "../sections/tawt-to";


const Home = () => {
  return (
      <main>
        <Hero/>
        <TawkToWrapper/>
        <section id='about'>
          <Video/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
        <Footer/>
      </main>
  )
}

export default Home;