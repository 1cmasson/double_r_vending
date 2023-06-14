import Hero from './sections/hero';
import About from './sections/about';
import Contact from './sections/contact';
import Products from './sections/products';
import Footer from './sections/footer';
import Machines from './sections/machines';

const Home = () => {
  return (
      <main>
        <Hero/>
        <section id='about'>
          <About/>
        </section>
        <section id='products'>
          <Products/>
        </section>
        <section id='machines'>
          <Machines/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
        <Footer/>
      </main>
  )
}

export default Home;