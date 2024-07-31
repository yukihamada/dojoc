'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const HomePage: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>ローディング中...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-center">
          <Image
            src="/top.webp"
            alt="DojoConnect Logo"
            width={150}
            height={150}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">DojoConnect</h1>
          <p className="text-xl text-gray-600 mb-8">
            武道道場の管理とコミュニティのためのプラットフォーム
          </p>
          {!user ? (
            <div className="space-y-4">
              <Link
                href="/api/auth/login"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                ログイン
              </Link>
              <Link
                href="/api/auth/signup"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                新規登録
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-6 text-lg text-gray-600">
                ようこそ、<span className="font-semibold">{user.name}</span>さん
              </p>
              <Link
                href="/dashboard"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out inline-block"
              >
                ダッシュボードへ
              </Link>
            </div>
          )}
        </div>
        <div className="mt-12 bg-white bg-opacity-90 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            DojoConnectの特徴
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="text-2xl mr-4">🏯</span>
              <span>道場管理の効率化</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-4">🏋️</span>
              <span>トレーニング記録と分析</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-4">🎭</span>
              <span>イベント管理とコミュニティ形成</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-4">📊</span>
              <span>詳細なレポートと分析ツール</span>
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-4">🌐</span>
              <span>道場間の交流促進</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
