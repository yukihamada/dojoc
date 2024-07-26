import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const snapshot = await db.collection('schedules').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSchedules(data);
    };
    fetchSchedules();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">スケジュール管理</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">日付</th>
            <th className="py-2">時間</th>
            <th className="py-2">イベント</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td className="border px-4 py-2">{schedule.date}</td>
              <td className="border px-4 py-2">{schedule.time}</td>
              <td className="border px-4 py-2">{schedule.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
