// @flow strict
import { achievementsData } from '@/utils/data/achievements';

function Achievements() {
  return (
    <div id='achievements' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-[#16f2b3] opacity-30"></div>
          
          <div className="space-y-8">
            {achievementsData.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className="relative flex items-start group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-[#16f2b3] rounded-full border-4 border-[#0d1224] z-10 group-hover:scale-125 transition-all duration-300"></div>
                
                {/* Achievement Card */}
                <div className="ml-16 w-full">
                  <div className="bg-[#0d1224] border border-[#1b2c68a0] rounded-lg p-6 hover:border-[#16f2b3] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,242,179,0.3)]">
                    {/* Year Badge */}
                    <div className="inline-block bg-[#16f2b3] text-[#0d1224] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {achievement.year}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="inline-block ml-2 bg-[#1a1443] text-[#16f2b3] px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {achievement.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#16f2b3] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
