// /components/PredictionForm.js
import { useState } from 'react';
import axios from 'axios';

export default function PredictionForm() {
  const [matchId, setMatchId] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/predictions', { matchId, prediction });
    setMatchId('');
    setPrediction('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={matchId}
        onChange={(e) => setMatchId(e.target.value)}
        placeholder="Match ID"
        required
      />
      <input
        type="text"
        value={prediction}
        onChange={(e) => setPrediction(e.target.value)}
        placeholder="Prediction"
        required
      />
      <button type="submit">Submit Prediction</button>
    </form>
  );
}
