import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase';

const DojoProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dojo, setDojo] = useState(null);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const fetchDojo = async () => {
        const doc = await db.collection('dojos').doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          setDojo(data);
          setName(data.name);
          setLocation(data.location);
          setDescription(data.description);
        }
      };
      fetchDojo();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await db.collection('dojos').doc(id).update({
      name,
      location,
      description,
    });
    alert('プロフィールが更新されました');
  };

  if (!dojo) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">道場プロフィール編集</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            道場名
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            場所
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            説明
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          更新
        </button>
      </form>
    </div>
  );
};

export default DojoProfile;
