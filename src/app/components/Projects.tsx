import Link from 'next/link';

const projectData = [
  {
    title: 'Proyecto 1',
    description: 'Una breve descripción de lo que hace este increíble proyecto.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '/gallery#proyecto1'
  },
  {
    title: 'Proyecto 2',
    description: 'Resolviendo un problema interesante con tecnología de punta.',
    tech: ['React', 'Firebase', 'Material UI'],
    link: '/gallery#proyecto2'
  },
  {
    title: 'Proyecto 3',
    description: 'Exploración de APIs y visualización de datos de una manera única.',
    tech: ['JavaScript', 'D3.js', 'HTML5'],
    link: '/gallery#proyecto3'
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">My <span className="text-blue-500">Projects:</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col border">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => <span key={t} className="bg-cyan-100 text-cyan-800 text-sm px-2 py-1 rounded">{t}</span>)}
              </div>
               <Link href={project.link} className="text-cyan-600 hover:underline mt-auto font-semibold">
                Ver en la galería →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;