export interface BottleResult {
  bottle_name: string;
  confidence: number;
  matched_label_id: string;
  timestamp?: number;
}

export interface ScanHistoryItem extends BottleResult {
  id: string;
  timestamp: number;
}

export type ScanStatus = 'idle' | 'scanning' | 'processing' | 'complete' | 'error';

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface WhiskyBottle {
  id: string;
  name: string;
  producer: string;
  type: string;
  region?: string;
  age?: string;
  price?: number;
  abv?: number;
}