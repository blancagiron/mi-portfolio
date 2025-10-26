import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full flex justify-center py-16 z-50">
      <nav className="flex items-center space-x-4 text-xl md:text-2xl font-bold text-gray-800">
        <Link 
          href="/#proyectos" 
          className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
        >
          projects
        </Link>
        <span className="text-gray-400 text-2xl">|</span>
        <Link 
          href="/gallery" 
          className="hover:text-red-500 hover:scale-110 transition-all duration-300"
        >
          gallery
        </Link>
        <span className="text-gray-400 text-2xl">|</span>
        <Link 
          href="/#contacto" 
          className="hover:text-green-500 hover:scale-110 transition-all duration-300"
        >
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;