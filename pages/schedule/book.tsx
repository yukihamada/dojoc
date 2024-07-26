import { useState } from 'react';
import { db } from '../../lib/firebase';

const BookSchedule = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [event, setEvent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await db.collection('schedules').add({
      date,
      time,
      event,
    });
    alert('予約が完了しました');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">スケジュール予約</h2>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            日付
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            時間
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="event" className="block text-sm font-medium text-gray-700">
            イベント
          </label>
          <input
            type="text"
            id="event"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          予約
        </button>
      </form>
    </div>
  );
};

export default BookSchedule;
