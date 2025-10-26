const journeyData = {
  education: [
    { 
      title: 'Computer Science Degree',
      institution: 'Universidad de Granada',
      period: '2021 - 2025',
      hash: '159669',
      description: 'Bachelor of Science in Computer Science and Engineering'
    }
  ],
  experience: [
    { 
      title: 'Software Developer Intern',
      company: 'Nter Tech Services',
      period: 'May 2025 - Present',
      hash: 'v559a5',
      achievements: [
        'Developed microservices and RESTful APIs with Spring Boot',
        'Created CRUD operations and managed SQL databases',
        'Collaborated with cross-functional teams in agile environment'
      ]
    }
  ]
};

const Journey = () => {
  return (
    <section id="journey" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="flex items-center justify-end mb-20">
        <h2 className="text-6xl md:text-6xl font-bold text-gray-900">
          My <span className="text-red-500">journey</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Education Branch - Pink */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-pink-500 to-pink-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h3>
            <div className="w-4 h-4 rounded-full bg-pink-500"></div>
          </div>
          
          <div className="relative pl-8 space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-pink-500"></div>
            
            {journeyData.education.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-6 w-4 h-4 rounded-full bg-pink-500 border-4 border-white shadow-lg"></div>
                
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-pink-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-lg md:text-xl text-gray-700 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded">
                      #{item.hash}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base md:text-lg">{item.period}</span>
                  </div>
                  
                  {item.description && (
                    <p className="mt-4 text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Branch - Green */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-green-500 to-green-500"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h3>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          
          <div className="relative pl-8 space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-green-500"></div>
            
            {journeyData.experience.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-6 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-lg"></div>
                
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-lg md:text-xl text-gray-700 font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded">
                      #{item.hash}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-500 mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base md:text-lg">{item.period}</span>
                  </div>
                  
                  {item.achievements && (
                    <div className="space-y-3">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="mt-16 flex items-center justify-center gap-3 text-gray-400 text-lg font-mono">
        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        <span>Timeline continues...</span>
      </div>
    </section>
  );
};

export default Journey;