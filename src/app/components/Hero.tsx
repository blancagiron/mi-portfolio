'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    { start: 'Hola, soy ', name: 'Blanca' },
    { start: 'Hi, I\'m ', name: 'Blanca' }
  ];

  useEffect(() => {
    const currentPhrase = phrases[loopNum % phrases.length];
    const fullText = currentPhrase.start + currentPhrase.name;

    const handleTyping = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);

        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(75);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-left max-w-2xl space-y-6 md:space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight min-h-[140px] sm:min-h-[160px] md:min-h-[220px] text-black">
              {text.split('Blanca')[0]}
              <span className="text-blue-400">
                {text.includes('Blanca') ? text.split('Blanca')[0].length > 0 ? 'Blanca' : '' : ''}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              <span className="text-red-500">Computer Science graduate</span> and{' '}
              <span className="text-orange-500">backend developer</span>.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              I enjoy combining <span className="text-pink-500">creative thinking</span> with{' '}
              <span className="text-green-600">technical tools</span> to design smart, efficient solutions. 
              I've always loved figuring out how things work, so I chose to become a developer and build my own.
            </p>
          </div>
          
          {/* Logo - Right Side */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image 
                src="/logo_portfolio.png" 
                alt="Logo" 
                width={450} 
                height={450}
                className="w-full h-full object-contain animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;