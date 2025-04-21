import React from 'react';
import { motion } from 'framer-motion';
import { Award, Info } from 'lucide-react';
import { BottleResult as BottleResultType } from '../types';
import ConfidenceScore from './ConfidenceScore';

interface BottleResultProps {
  result: BottleResultType;
  onReset: () => void;
}

const BottleResult: React.FC<BottleResultProps> = ({ result, onReset }) => {
  const { bottle_name, confidence, matched_label_id } = result;
  
  // Format bottle ID for display
  const formattedId = matched_label_id.replace('bottle_', '#');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md"
    >
      <div className="card">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-display font-semibold text-neutral-900 dark:text-neutral-50">
              Identified Bottle
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              BAXUS database match
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
          >
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full">
              <Award size={20} />
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="w-full md:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                  {bottle_name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Label ID: {formattedId}
                </p>
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-neutral-100 dark:bg-neutral-800/60 rounded-lg">
                <Info size={16} className="text-neutral-500 dark:text-neutral-400" />
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  From the BAXUS verified database of 500+ whisky bottles
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <ConfidenceScore score={confidence} size="lg" />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <button
            onClick={onReset}
            className="btn-outline w-full"
          >
            Scan Another Bottle
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BottleResult;