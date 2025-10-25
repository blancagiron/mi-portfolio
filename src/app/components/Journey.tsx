const journeyData = [
    { type: 'main', commit: 'Started my journey', hash: '8c4e8vc' },
    { 
      type: 'branch-education', 
      commit: 'Computer Science Degree', 
      details: 'UGR, 2021-2025',
      hash: '159669',
      branchName: 'education'
    },
    { type: 'main', commit: 'University projects', hash: 'a8f050' },
    { 
      type: 'branch-experience', 
      commit: 'Software Developer Intern', 
      details: 'Nter Tech Service (May 2025 - Present)',
      hash: 'v559a5',
      branchName: 'experience',
      subCommits: [
        { commit: 'Developed microservices and RESTful APIs with Spring Boot', hash: '2f9a11' },
        { commit: 'Created CRUD operations and managed SQL databases', hash: '7b3c22' }
      ]
    },
    { type: 'main', commit: 'HEAD', hash: 'current' },
  ];
  
  const Journey = () => {
    return (
      <section id="journey" className="py-20 container mx-auto px-4 max-w-5xl">
        <h2 className="text-5xl font-bold text-center mb-20">My <span className="text-red-500">journey</span></h2>
        
        <div className="relative font-mono text-sm">
          {/* Main branch line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-blue-500"></div>
          
          {journeyData.map((item, index) => {
            const isBranch = item.type.startsWith('branch');
            const branchColor = item.type === 'branch-education' ? 'bg-yellow-500' : 'bg-green-500';
            const textColor = item.type === 'branch-education' ? 'text-yellow-600' : 'text-green-600';
            
            return (
              <div key={index} className="relative mb-8">
                {/* Main commit */}
                <div className="flex items-start gap-4 mb-2">
                  <div className="relative flex items-center gap-2">
                    {/* Main branch dot */}
                    <div className={`w-3 h-3 rounded-full bg-blue-500 border-2 border-white z-10 ${isBranch ? '' : 'ml-[26px]'}`}></div>
                    
                    {/* Branch line and dot */}
                    {isBranch && (
                      <>
                        {/* Horizontal branch line */}
                        <div className={`h-0.5 w-8 ${branchColor}`}></div>
                        {/* Branch dot */}
                        <div className={`w-3 h-3 rounded-full ${branchColor} border-2 border-white z-10`}></div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-yellow-600 font-semibold">{item.hash}</span>
                      <span className="text-gray-700 font-semibold">{item.commit}</span>
                      {isBranch && (
                        <span className={`${textColor} text-xs`}>({item.branchName})</span>
                      )}
                    </div>
                    {item.details && (
                      <p className="text-gray-500 text-xs mt-1 ml-0">{item.details}</p>
                    )}
                  </div>
                </div>
                
                {/* Sub-commits for branches */}
                {item.subCommits && (
                  <div className="ml-[84px] space-y-2 mt-2">
                    {/* Vertical line for sub-commits */}
                    <div className={`absolute left-[76px] w-0.5 h-full ${branchColor}`} style={{top: '12px'}}></div>
                    
                    {item.subCommits.map((sub, subIndex) => (
                      <div key={subIndex} className="flex items-start gap-4 relative">
                        <div className={`w-2 h-2 rounded-full ${branchColor} border border-white z-10 relative`} style={{left: '-10px'}}></div>
                        <div className="flex items-baseline gap-3 flex-1" style={{marginLeft: '-6px'}}>
                          <span className="text-yellow-600 font-semibold text-xs">{sub.hash}</span>
                          <span className="text-gray-600 text-xs">{sub.commit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Journey;