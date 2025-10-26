'use client';

const skillsData = {
  languages: [
    { name: 'Java', color: 'border-red-500 hover:bg-red-500' },
    { name: 'Python', color: 'border-blue-500 hover:bg-blue-500' },
    { name: 'Go', color: 'border-cyan-500 hover:bg-cyan-500' },
    { name: 'C++', color: 'border-indigo-500 hover:bg-indigo-500' },
    { name: 'JavaScript', color: 'border-yellow-500 hover:bg-yellow-500' }
  ],
  frameworks: [
    { name: 'Spring Boot', color: 'border-green-500 hover:bg-green-500' },
    { name: 'React', color: 'border-cyan-400 hover:bg-cyan-400' }
  ],
  databases: [
    { name: 'PostgreSQL', color: 'border-blue-700 hover:bg-blue-700' },
    { name: 'MySQL', color: 'border-orange-500 hover:bg-orange-500' },
    { name: 'MongoDB', color: 'border-green-600 hover:bg-green-600' }
  ],
  tools: [
    { name: 'Git', color: 'border-red-600 hover:bg-red-600' },
    { name: 'Postman', color: 'border-orange-500 hover:bg-orange-500' },
    { name: 'Jira', color: 'border-blue-600 hover:bg-blue-600' },
    { name: 'Trello', color: 'border-blue-500 hover:bg-blue-500' }
  ],
  web: [
    { name: 'HTML', color: 'border-orange-600 hover:bg-orange-600' },
    { name: 'CSS', color: 'border-blue-600 hover:bg-blue-600' }
  ]
};

const categoryLabels = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  databases: 'Databases',
  tools: 'Tools',
  web: 'Web'
};

const Toolbox = () => {
  let animationIndex = 0;

  return (
    <section id="toolbox" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="flex items-center justify-start mb-16">
        <h2 className="text-6xl md:text-6xl font-bold text-gray-900">
          My <span className="text-green-500">toolbox</span>
        </h2>
      </div>
      
      <div className="bg-white rounded-3xl p-12 md:p-16 shadow-lg border border-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const currentIndex = animationIndex++;
                  return (
                    <div
                      key={skill.name}
                      className={`py-2.5 px-5 bg-white border-2 ${skill.color} hover:text-white rounded-full font-semibold text-sm md:text-base text-gray-800 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md opacity-0 animate-fade-in`}
                      style={{ animationDelay: `${currentIndex * 40}ms`, animationFillMode: 'forwards' }}
                    >
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Toolbox;