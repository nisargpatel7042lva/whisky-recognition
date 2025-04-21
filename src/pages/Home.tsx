import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BottleResult, ScanStatus } from '../types';
import ImageScanner from '../components/ImageScanner';
import BottleResultComponent from '../components/BottleResult';
import { recognizeWhiskyBottle, saveScanResult } from '../services/recognitionService';

const Home: React.FC = () => {
  const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
  const [result, setResult] = useState<BottleResult | null>(null);
  
  const handleCapture = async (imageData: string) => {
    try {
      setScanStatus('scanning');
      
      // Simulate brief scanning animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setScanStatus('processing');
      
      // Process the image with the recognition service
      const recognitionResult = await recognizeWhiskyBottle(imageData);
      
      // Update the result and save to history
      setResult(recognitionResult);
      saveScanResult(recognitionResult);
      
      setScanStatus('complete');
    } catch (error) {
      console.error('Error during recognition:', error);
      setScanStatus('error');
    }
  };
  
  const handleReset = () => {
    setResult(null);
    setScanStatus('idle');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-neutral-900 dark:text-neutral-100">
          Whisky Bottle Recognition
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Take a photo or upload an image of any whisky bottle, and our AI will identify it from our database of 500+ premium whiskies.
        </p>
      </motion.div>
      
      <div className="flex justify-center mb-10">
        {scanStatus === 'complete' && result ? (
          <BottleResultComponent result={result} onReset={handleReset} />
        ) : (
          <ImageScanner onCapture={handleCapture} status={scanStatus} />
        )}
      </div>
      
      {scanStatus === 'error' && (
        <div className="text-center mb-10">
          <div className="card-glass max-w-md mx-auto">
            <h3 className="text-error-500 font-semibold mb-2">Recognition Error</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              We couldn't identify the bottle. Please try again with a clearer image of the label.
            </p>
            <button
              onClick={handleReset}
              className="btn-outline"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;