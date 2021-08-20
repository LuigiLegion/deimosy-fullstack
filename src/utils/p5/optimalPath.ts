// Imports
import axios from 'axios';

import { Coordinate } from '../../interfaces';

// Initializations
const optimalPath = async (start: Coordinate, end: Coordinate) => {
  const p5 = document.getElementById('p5') as HTMLInputElement;
  const { cursor } = p5.style;

  try {
    p5.style.cursor = 'wait';

    const { data }: { data: number[][] } = await axios.post(
      process.env.NODE_ENV === 'production' ? '/api/paths' : 'http://localhost:5000/api/paths',
      {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start, end }),
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    p5.style.cursor = cursor;
  }
};

// Exports
export default optimalPath;
