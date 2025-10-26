'use client'
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-32 container mx-auto px-6 max-w-7xl relative">
      {/* Decorative flowers - larger sizes for more visual presence */}
      <div
        className="absolute -top-6 right-10 w-32 h-32 md:w-40 md:h-40 animate-float pointer-events-none"
        style={{ animationDelay: '0s' }}
      >
        <Image
          src="/flor1.png"
          alt=""
          width={160}
          height={160}
          className="w-full h-full"
        />
      </div>

      <div
        className="absolute top-1/3 -left-32 w-24 h-24 md:w-28 md:h-28 animate-float pointer-events-none hidden md:block"
        style={{ animationDelay: '1.2s', transform: 'rotate(-25deg)' }}
      >
        <Image
          src="/flor2.png"
          alt=""
          width={180}
          height={180}
          className="w-full h-full"
        />
      </div>

      <div
        className="absolute bottom-20 right-16 w-20 h-20 md:w-24 md:h-24 animate-float pointer-events-none"
        style={{ animationDelay: '0.8s', transform: 'rotate(45deg)' }}
      >
        <Image
          src="/flor3.png"
          alt=""
          width={120}
          height={120}
          className="w-full h-full"
        />
      </div>

      <div
        className="absolute top-2/3 right-1/4 w-20 h-20 animate-float pointer-events-none hidden lg:block"
        style={{ animationDelay: '1.8s', transform: 'rotate(120deg)' }}
      >
        <Image
          src="/flor1.png"
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>

      <div
        className="absolute bottom-32 left-1/4 w-24 h-24 animate-float pointer-events-none hidden sm:block opacity-70"
        style={{ animationDelay: '0.5s', transform: 'rotate(-80deg)' }}
      >
        <Image
          src="/flor2.png"
          alt=""
          width={140}
          height={140}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-6xl font-semibold text-gray-900 tracking-tight">
            Beyond <span className="text-purple-500">the code</span>
          </h2>
        </div>

        <div className="max-w-2xl text-xl md:text-xl leading-relaxed text-gray-600 space-y-8">
          <p>
            For me, the drive to{' '}
            <span className="text-red-500 font-medium">create</span> is a
            constant. It's what led me to study{' '}
            <span className="text-purple-500 font-medium">
              Computer Science
            </span>{' '}
            and what fuels my work as a{' '}
            <span className="text-cyan-500 font-medium">software engineer</span>{' '}
            today.
          </p>
          <p>
            While my university years gave me a taste of{' '}
            <span className="text-orange-500 font-medium">
              frontend development
            </span>
            , I now specialize in the{' '}
            <span className="text-blue-500 font-medium">backend</span>, where I
            enjoy architecting the solid, unseen systems that make great user
            experiences possible.
          </p>
          <p>
            This need to build and capture moments extends beyond my keyboard.
            When I'm not coding, you'll find me with my friends,{' '}
            <span className="text-green-500 font-medium">
              exploring the world
            </span>{' '}
            while taking pictures, or seeking inspiration for the next project.
            In the end, it's all about{' '}
            <span className="text-pink-500 font-medium">
              bringing ideas to life
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
