import Papa from 'papaparse';
import { WhiskyBottle } from '../types'; // adjust the path if needed

export const loadWhiskyDatabase = async (): Promise<WhiskyBottle[]> => {
  const response = await fetch('/data/whiskies.csv');
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse<WhiskyBottle>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results: Papa.ParseResult<WhiskyBottle>) => {
        const bottles: WhiskyBottle[] = results.data.map((row: WhiskyBottle) => ({
          id: row.id,
          name: row.name,
          image_url: row.image_url,
          // Add other fields if you have them in CSV
        }));
        resolve(bottles);
      },
      error: (error: Papa.ParseError) => reject(error)
    });
  });
};
