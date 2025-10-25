const skills = [
    { name: 'Java', color: 'border-red-500' },
    { name: 'Spring Boot', color: 'border-green-500' },
    { name: 'Python', color: 'border-blue-500' },
    { name: 'Go', color: 'border-cyan-500' },
    { name: 'C++', color: 'border-indigo-600' },
    { name: 'SQL', color: 'border-orange-500' },
    { name: 'MongoDB', color: 'border-green-600' },
    { name: 'React', color: 'border-cyan-400' },
    { name: 'JavaScript', color: 'border-yellow-500' },
    { name: 'HTML', color: 'border-orange-600' },
    { name: 'CSS', color: 'border-blue-600' },
    { name: 'Postman', color: 'border-orange-500' },
    { name: 'Git', color: 'border-red-600' }
  ];
  
  const Toolbox = () => {
    return (
      <section id="toolbox" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">My <span className="text-green-500">Toolbox</span></h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className={`py-2 px-5 border-2 rounded-lg font-semibold text-lg transition-transform hover:scale-105 bg-white ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Toolbox;