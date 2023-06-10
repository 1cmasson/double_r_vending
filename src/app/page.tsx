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
        <About/>
        <Products/>
        <Machines/>
        <Contact/>
        <Footer/>
      </main>
  )
}

export default Home;