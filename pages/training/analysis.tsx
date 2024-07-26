import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';

const TrainingAnalysis = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchTrainings = async () => {
      const snapshot = await db.collection('trainings').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTrainings(data);
    };
    fetchTrainings();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">トレーニング分析</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">日付</th>
            <th className="py-2">時間</th>
            <th className="py-2">種類</th>
            <th className="py-2">メモ</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map(training => (
            <tr key={training.id}>
              <td className="border px-4 py-2">{training.date}</td>
              <td className="border px-4 py-2">{training.duration}</td>
              <td className="border px-4 py-2">{training.type}</td>
              <td className="border px-4 py-2">{training.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingAnalysis;
