'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
        <Image 
          src="/logo_portfolio.png" 
          alt="Logo" 
          width={150} 
          height={150}
          className="w-28 h-28 md:w-40 md:h-40"
        />
        <div>
          <TypeAnimation
            sequence={[
              'Hola, soy Blanca',
              2000,
              "Hi, I'm Blanca",
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl md:text-6xl font-bold"
            repeat={Infinity}
          />
          <p className="text-xl md:text-2xl text-gray-700 mt-2">
            <span className="text-purple-500">Computer Science</span> graduate and <span className="text-orange-500">content creator</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;