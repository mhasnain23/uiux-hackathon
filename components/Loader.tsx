"use client";
import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const animate = () => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          return 100;
        }
        return prev + 0.5; // Slower, smoother progression
      });
      
      if (!isComplete) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isComplete]);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => setIsComplete(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50">
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        {/* Background circle */}
        <div className="absolute inset-0 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Progress track */}
        <div className="absolute inset-0 transform -rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeDasharray={`${283 * progress / 100} 283`}
              className="transition-[stroke-dasharray] duration-75 ease-out"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Animated spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute inset-0 border-t-4 border-r-4 border-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Percentage with shine effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-bold text-2xl md:text-3xl">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Floating dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;