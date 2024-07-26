import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';

const LocalRanking = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      const snapshot = await db.collection('local_rankings').orderBy('score', 'desc').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRankings(data);
    };
    fetchRankings();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">ローカルランキング</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">順位</th>
            <th className="py-2">名前</th>
            <th className="py-2">スコア</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((ranking, index) => (
            <tr key={ranking.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{ranking.name}</td>
              <td className="border px-4 py-2">{ranking.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocalRanking;
