import Navbar from '../components/Navbar';

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-16 text-center">Galería de <span className="text-purple-500">Proyectos</span></h1>

          <div id="proyecto1" className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Proyecto 1</h2>
            <p className="mb-4 text-gray-600 max-w-2xl">Aquí irían las imágenes y una descripción más detallada del proyecto 1. Puedes añadir múltiples imágenes en una cuadrícula.</p>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center border">
              <p className="text-gray-500">Imagen del proyecto</p>
            </div>
          </div>

          <div id="proyecto2" className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Proyecto 2</h2>
            <p className="mb-4 text-gray-600 max-w-2xl">Descripción detallada del proyecto 2.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border"><p className="text-gray-500">Imagen 1</p></div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center border"><p className="text-gray-500">Imagen 2</p></div>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
};

export default GalleryPage;