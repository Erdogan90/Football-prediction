// /src/app/predictions/page.js
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function Predictions() {
  const { data: session, status } = useSession();
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    if (session) {
      const fetchPredictions = async () => {
        const response = await axios.get('/api/predictions');
        setPredictions(response.data);
      };
      fetchPredictions();
    }
  }, [session]);

  return (
    <div>
      <h1>My Predictions</h1>
      <ul>
        {predictions.map(prediction => (
          <li key={prediction._id}>{prediction.matchId}: {prediction.prediction}</li>
        ))}
      </ul>
    </div>
  );
}



// export default function predictions() {
//   return (
//     <main>
//       <div>
//         <h1> This is the predictions page</h1>
//         <div>
//         </div>
//       </div>
//       </main>)}