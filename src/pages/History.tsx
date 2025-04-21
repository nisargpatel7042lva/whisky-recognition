import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { getScanHistory } from '../services/recognitionService';
import { ScanHistoryItem } from '../types';
import ConfidenceScore from '../components/ConfidenceScore';

const History: React.FC = () => {
  const [history, setHistory] = React.useState<ScanHistoryItem[]>([]);

  React.useEffect(() => {
    const loadHistory = () => {
      const scanHistory = getScanHistory() as ScanHistoryItem[];
      setHistory(scanHistory);
    };

    loadHistory();
    
    // Listen for storage events to sync history across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'scanHistory') {
        loadHistory();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Format timestamp to a readable date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  if (history.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Scan History</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            No scans yet. Try scanning some bottles!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock size={24} className="text-primary-500" />
            <h1 className="text-2xl font-display font-bold">Scan History</h1>
          </div>
        </div>

        <div className="space-y-4">
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-glass"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.bottle_name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(item.timestamp)}
                  </p>
                </div>
                <ConfidenceScore score={item.confidence} size="sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default History;