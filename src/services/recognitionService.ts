import { BottleResult, WhiskyBottle } from '../types';
import { promises as fs } from 'fs';
import path from 'path';

// const whiskyDatabase = await loadWhiskyDatabase();
const loadWhiskyDatabase = async (): Promise<WhiskyBottle[]> => {
  const filePath = path.join(__dirname, './public/whisky_database.csv');
  const csvData = await fs.readFile(filePath, 'utf-8');
  
  return csvData
    .split('\n')
    .slice(1) // Skip header row
    .filter(line => line.trim() !== '') // Remove empty lines
    .map(line => {
      const [id, name, producer, type, region, age] = line.split(',');
      return {
        id: id.trim(),
        name: name.trim(),
        producer: producer.trim(),
        type: type.trim(),
        region: region.trim() || null,
        age: age.trim() || null
      } as WhiskyBottle;
    });
};

const whiskyBottles: WhiskyBottle[] = await loadWhiskyDatabase();
interface MatchResult {
  score: number;
  bottle: WhiskyBottle;
}

interface ImageAnalysis {
  text: string[];
  visualFeatures: {
    colors: string[];
    shapes: string[];
    logoDetected: boolean;
    labelArea: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}

const analyzeImage = async (imageData: string): Promise<ImageAnalysis> => {
  // Simulate OCR and feature extraction
  // In production, this would use a real computer vision API
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Extract text from the image (simulated)
  const detectedText = imageData.includes('buffalo') 
    ? ['BUFFALO', 'TRACE', 'KENTUCKY', 'STRAIGHT', 'BOURBON']
    : ['UNKNOWN', 'LABEL'];
    
  return {
    text: detectedText,
    visualFeatures: {
      colors: ['amber', 'brown', 'gold'],
      shapes: ['rectangle', 'circle', 'label'],
      logoDetected: true,
      labelArea: {
        x: 100,
        y: 150,
        width: 300,
        height: 400
      }
    }
  };
};

const calculateTextSimilarity = (detectedText: string[], bottleName: string): number => {
  const nameWords = bottleName.toUpperCase().split(' ');
  const detectedWords = detectedText.map(word => word.toUpperCase());
  
  // Calculate word matches with fuzzy matching
  const matchedWords = detectedWords.filter(word => 
    nameWords.some(nameWord => {
      // Exact match
      if (nameWord === word) return true;
      
      // Substring match
      if (nameWord.includes(word) || word.includes(nameWord)) return true;
      
      // Fuzzy match using Levenshtein distance
      return levenshteinDistance(word, nameWord) <= 2;
    })
  );
  
  // Calculate similarity score
  const matchScore = matchedWords.length / Math.max(detectedWords.length, nameWords.length);
  
  return matchScore;
};

const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + substitutionCost
      );
    }
  }

  return matrix[b.length][a.length];
};

  export const recognizeWhiskyBottle = async (imageData: string): Promise<BottleResult> => {
    try {
      const analysis = await analyzeImage(imageData);
      
      const matches: MatchResult[] = whiskyBottles.map(bottle => {
        // Calculate text similarity for bottle name
        const nameScore = calculateTextSimilarity(analysis.text, bottle.name);
        
        // Calculate producer match
        const producerScore = calculateTextSimilarity(analysis.text, bottle.producer);
        
        // Calculate type match
        const typeScore = calculateTextSimilarity(analysis.text, bottle.type);
        
        // Calculate region match if present
        const regionScore = bottle.region ? 
          calculateTextSimilarity(analysis.text, bottle.region) : 
          0;
        
        // Calculate age match if present
        const ageScore = bottle.age && analysis.text.includes(bottle.age) ? 1 : 0;
        
        // Weighted average of different matching criteria
        const totalScore = (
          nameScore * 0.4 + 
          producerScore * 0.3 + 
          typeScore * 0.15 +
          regionScore * 0.1 +
          ageScore * 0.05
        );
        
        return {
          score: totalScore,
          bottle
        };
      });
      
      // Sort by score and get best match
      const bestMatch = matches.sort((a, b) => b.score - a.score)[0];
      
      // Only return match if confidence is high enough (90%)
      if (bestMatch.score >= 0.9) {
        return {
          bottle_name: bestMatch.bottle.name,
          confidence: bestMatch.score,
          matched_label_id: bestMatch.bottle.id,
          timestamp: Date.now()
        };
      }
      
      throw new Error('No confident match found');
    } catch (error) {
      console.error('Recognition error:', error);
      throw error;
    }
  };

export const getScanHistory = (): BottleResult[] => {
  try {
    const history = localStorage.getItem('scanHistory');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Failed to retrieve scan history:', error);
    return [];
  }
};

export const saveScanResult = (result: BottleResult): void => {
  try {
    const history = getScanHistory();
    const updatedHistory = [
      { ...result, id: `scan_${Date.now()}`, timestamp: Date.now() },
      ...history
    ].slice(0, 20);
    
    localStorage.setItem('scanHistory', JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Failed to save scan result:', error);
  }
};