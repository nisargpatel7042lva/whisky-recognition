import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, Upload, X, Scan } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScanStatus } from '../types';

interface ImageScannerProps {
  onCapture: (imageData: string) => void;
  status: ScanStatus;
}

const ImageScanner: React.FC<ImageScannerProps> = ({ onCapture, status }) => {
  const [captureMethod, setCaptureMethod] = useState<'camera' | 'upload' | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const isScanning = status === 'scanning' || status === 'processing';
  
  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setPreviewImage(imageSrc);
      }
    }
  }, [webcamRef]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreviewImage(result);
        // Automatically trigger scan when file is selected
        onCapture(result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleScan = () => {
    if (previewImage) {
      onCapture(previewImage);
    }
  };
  
  const handleReset = () => {
    setPreviewImage(null);
    setCaptureMethod(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <AnimatePresence mode="wait">
        {!captureMethod && !previewImage ? (
          <motion.div
            key="options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row gap-4 w-full"
          >
            <button
              onClick={() => setCaptureMethod('camera')}
              className="btn-primary flex-1 flex items-center justify-center gap-2 py-4"
            >
              <Camera size={20} />
              <span>Use Camera</span>
            </button>
            <button
              onClick={() => {
                setCaptureMethod('upload');
                fileInputRef.current?.click();
              }}
              className="btn-secondary flex-1 flex items-center justify-center gap-2 py-4"
            >
              <Upload size={20} />
              <span>Upload Image</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </motion.div>
        ) : previewImage ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full"
          >
            <div className="relative rounded-xl overflow-hidden bg-neutral-900">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-64 object-contain"
              />
              
              {isScanning && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="scan-line"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Scan size={40} className="text-white animate-pulse-slow" />
                    </div>
                  </div>
                </div>
              )}
              
              {!isScanning && (
                <button
                  onClick={handleReset}
                  className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Reset"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            
            {!isScanning && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleReset}
                  className="btn-outline flex-1"
                  disabled={isScanning}
                >
                  Reset
                </button>
                <button
                  onClick={handleScan}
                  className="btn-primary flex-1"
                  disabled={isScanning}
                >
                  Identify Bottle
                </button>
              </div>
            )}
            
            {status === 'processing' && (
              <div className="mt-4 text-center">
                <p className="text-neutral-600 dark:text-neutral-400">
                  Processing image...
                </p>
              </div>
            )}
          </motion.div>
        ) : captureMethod === 'camera' ? (
          <motion.div
            key="camera"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <div className="relative rounded-xl overflow-hidden bg-black">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: 'environment',
                  aspectRatio: 4/3
                }}
                className="w-full"
              />
              <button
                onClick={() => setCaptureMethod(null)}
                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Close camera"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleCapture}
                className="btn-primary px-8 py-3"
              >
                Capture Photo
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ImageScanner;