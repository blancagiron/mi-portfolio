import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full absolute top-0 flex justify-center py-8 z-50">
      <nav className="flex space-x-8 text-lg text-gray-600">
        <Link href="/#proyectos" className="hover:text-black transition-colors">proyectos</Link>
        <Link href="/gallery" className="hover:text-black transition-colors">galería</Link>
        <Link href="/#contacto" className="hover:text-black transition-colors">contacto</Link>
      </nav>
    </header>
  );
};

export default Navbar;