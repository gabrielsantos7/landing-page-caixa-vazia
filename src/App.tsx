import { About } from './components/sections/about';
import { Accordions } from './components/sections/accordions';
import { Cards } from './components/sections/cards';
import { Contact } from './components/sections/contact';
import { Footer } from './components/sections/footer';
import { Header } from './components/sections/header';
import { Hero } from './components/sections/hero';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <About />
        <Accordions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
