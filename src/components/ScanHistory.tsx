import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { ScanHistoryItem } from '../types';
import ConfidenceScore from './ConfidenceScore';

interface ScanHistoryProps {
  history: ScanHistoryItem[];
  onClearHistory: () => void;
}

const ScanHistory: React.FC<ScanHistoryProps> = ({ history, onClearHistory }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  if (history.length === 0) {
    return null;
  }
  
  // Format timestamp to a readable date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  
  const visibleHistory = isExpanded ? history : history.slice(0, 3);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-3xl mx-auto mt-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-neutral-600 dark:text-neutral-400" />
          <h2 className="text-lg font-display font-semibold">Recent Scans</h2>
        </div>
        
        <button
          onClick={onClearHistory}
          className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-error-500 dark:hover:text-error-500 flex items-center gap-1"
        >
          <Trash2 size={14} />
          <span>Clear</span>
        </button>
      </div>
      
      <div className="space-y-3">
        {visibleHistory.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-glass"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-neutral-900 dark:text-neutral-100 font-semibold">
                  {item.bottle_name}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {formatDate(item.timestamp)}
                </p>
              </div>
              
              <div className="flex items-center">
                <ConfidenceScore score={item.confidence} size="sm" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {history.length > 3 && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn-outline flex items-center gap-2 text-sm py-1"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                <span>Show More</span>
              </>
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ScanHistory;