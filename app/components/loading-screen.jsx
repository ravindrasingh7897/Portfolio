'use client';

import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  
  const loadingTexts = [
    'Initializing Portfolio...',
    'Loading Projects...',
    'Setting up Components...',
    'Preparing Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowWelcome(true);
          setTimeout(() => onLoadingComplete(), 1000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  useEffect(() => {
    // Type writer effect for loading texts
    if (progress < 100) {
      const textInterval = setInterval(() => {
        const currentFullText = loadingTexts[textIndex];
        
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // Move to next text after a pause
          setTimeout(() => {
            setCurrentText('');
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
          }, 800);
        }
      }, 80);

      return () => clearInterval(textInterval);
    } else {
      setCurrentText('Welcome to my Portfolio!');
    }
  }, [currentText, textIndex, loadingTexts, progress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0d1224] via-[#0a0d37] to-[#16213e] overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse" />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-violet-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute border border-violet-500/20 ${
              i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rotate-12' : '-rotate-12'
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${4 + i}s infinite ease-in-out ${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8 max-w-lg w-full">
        {/* Main Logo Section */}
        <div className="mb-12">
          <div className={`inline-block p-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 mb-6 transition-transform duration-1000 ${
            showWelcome ? 'scale-125' : 'scale-100'
          }`}>
            <div className="relative">
              <svg 
                className={`w-16 h-16 text-white transition-transform duration-1000 ${
                  progress < 100 ? 'animate-spin' : 'rotate-0'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                />
              </svg>
              {progress === 100 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          <h1 className={`text-4xl font-bold text-white mb-3 transition-all duration-500 ${
            showWelcome ? 'scale-110 text-[#16f2b3]' : 'scale-100'
          }`}>
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 font-light">Ravindra Singh Shekhawat</p>
        </div>

        {/* Loading Text with Enhanced Typewriter Effect */}
        <div className="mb-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-violet-500/20">
            <p className="text-lg text-[#16f2b3] h-8 flex items-center justify-center font-mono">
              {currentText}
              <span className={`ml-1 ${progress === 100 ? 'animate-bounce' : 'animate-pulse'}`}>
                {progress === 100 ? '✨' : '|'}
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden border border-gray-600/30">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Multiple shine effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-ping" />
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {['React', 'Next.js', 'Node.js', 'MongoDB'].map((tech, i) => (
            <div
              key={tech}
              className={`px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-600/30 transition-all duration-500 ${
                progress > (i + 1) * 25 ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Success Message */}
        {showWelcome && (
          <div className="animate-fade-in">
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-4">
              <p className="text-green-400 font-semibold">Ready to explore!</p>
            </div>
          </div>
        )}
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
