'use client'
import Hero from './sections/hero';
import TawkToWrapper from './sections/tawt-to';
import Video from './sections/video';
import Partners from './sections/partners';
import Contact from './sections/contact';
import Footer from './sections/footer';


const App = () => {
  return (
      <main>
        <Hero/>
        <TawkToWrapper/>
        <section id='about'>
          <Video/>
        </section>
        <section id='partners'>
          <Partners/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
        <Footer/>
      </main>
  )
}

export default App;