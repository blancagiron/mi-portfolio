import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Toolbox from './components/Toolbox';
import About from './components/About';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Toolbox />
      <About />
      <Projects />
      <footer id="contacto" className="text-center py-20">
        <p className="text-lg">Hablemos.</p>
        <a href="mailto:tuemail@example.com" className="text-xl text-cyan-600 hover:underline font-bold">
          tuemail@example.com
        </a>
      </footer>
    </main>
  );
}