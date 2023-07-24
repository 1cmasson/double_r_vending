'use client'
import Hero from './sections/hero';
import TawkToWrapper from './sections/tawt-to';
import Video from './sections/video';
import About from './about/page';
import Contact from './sections/contact';
import Footer from './sections/footer';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
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

export default App;