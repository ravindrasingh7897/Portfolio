// @flow strict
'use client';

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = project.description.length > 150 
    ? project.description.substring(0, 150) + '...' 
    : project.description;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      
      <div className="overflow-hidden border-t-[2px] border-indigo-900 flex flex-col lg:flex-row">
        
        <div className="lg:w-1/3 w-full p-4 lg:p-6 flex items-center justify-center bg-gradient-to-br from-[#0a0b1e] to-[#16213e] border-r border-indigo-900/50">
          <div className="relative w-full h-48 lg:h-64 rounded-lg overflow-hidden group">
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 rounded-lg border border-violet-500/30 group-hover:border-violet-400/60 transition-colors duration-300" />
                
                
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1a1443] to-[#0f0f23] rounded-lg flex items-center justify-center border border-violet-500/20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Project Image</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-2/3 w-full px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {
                project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {
                      project.tools?.length - 1 !== i &&
                      <span className="text-gray-400">{`', '`}</span>
                    }
                  </React.Fragment>
                ))
              }
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">links:</span>
              <span className="text-gray-400">[</span>
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline transition-colors duration-200"
                >
                  'Code'
                </a>
              )}
              {project.code && project.demo && <span className="text-gray-400">, </span>}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline transition-colors duration-200"
                >
                  'Live Demo'
                </a>
              )}
              {!project.code && !project.demo && (
                <span className="text-gray-500 italic">'Coming Soon'</span>
              )}
              <span className="text-gray-400">],</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400 block lg:inline leading-relaxed">
                {' ' + (showFullDescription ? project.description : shortDescription)}
              </span>
              {project.description.length > 150 && (
                <button 
                  onClick={toggleDescription}
                  className="text-violet-400 hover:text-violet-300 underline ml-2 text-sm transition-colors duration-200"
                >
                  {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
              )}
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;