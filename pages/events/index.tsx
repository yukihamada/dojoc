import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await db.collection('events').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">イベント一覧</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">イベント名</th>
            <th className="py-2">日付</th>
            <th className="py-2">場所</th>
            <th className="py-2">説明</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className="border px-4 py-2">{event.name}</td>
              <td className="border px-4 py-2">{event.date}</td>
              <td className="border px-4 py-2">{event.location}</td>
              <td className="border px-4 py-2">{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
