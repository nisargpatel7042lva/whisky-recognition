import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfidenceScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

const ConfidenceScore: React.FC<ConfidenceScoreProps> = ({ score, size = 'md' }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  const percentage = score * 100;
  const sizeClasses = {
    sm: 'w-16 h-16 text-sm',
    md: 'w-24 h-24 text-base',
    lg: 'w-32 h-32 text-lg'
  };
  
  // Color based on confidence level
  const getColorClass = () => {
    if (score >= 0.9) return 'text-success-500';
    if (score >= 0.8) return 'text-primary-500';
    if (score >= 0.7) return 'text-warning-500';
    return 'text-error-500';
  };
  
  useEffect(() => {
    setAnimatedScore(0);
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [score]);
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center confidence-meter`}
        style={{ '--percentage': `${percentage}%` } as React.CSSProperties}
      >
        <div className="absolute inset-1 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center">
          <motion.span 
            className={`font-semibold ${getColorClass()}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {Math.round(animatedScore * 100)}%
          </motion.span>
        </div>
      </div>
      <motion.p 
        className="mt-2 text-sm text-neutral-600 dark:text-neutral-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        {score >= 0.9 ? 'Excellent match' : 
         score >= 0.8 ? 'Good match' : 
         score >= 0.7 ? 'Possible match' : 
         'Low confidence'}
      </motion.p>
    </div>
  );
};

export default ConfidenceScore;