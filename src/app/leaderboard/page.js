// /pages/scores.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get('/api/scores');
      setScores(response.data);
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {scores.map(score => (
          <li key={score.userId}>{score.userId}: {score.totalPoints}</li>
        ))}
      </ul>
    </div>
  );
}


export default function leaderboard() {
    return (
      <main>
        <div>
          <h1> This is the leaderboard page</h1>
          <div>
          </div>
        </div>
        </main>)}