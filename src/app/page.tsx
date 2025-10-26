import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Toolbox from './components/Toolbox';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Toolbox />
      <About />
      <Projects />
      <Contact />
      <footer id="contacto" className="text-center py-20">
        <p className="text-lg">Site under construction. Blanca Girón Ricoy.</p>
      </footer>
    </main>
  );
}