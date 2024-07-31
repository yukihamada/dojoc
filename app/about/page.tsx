import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';

const Header = dynamic(() => import('../../components/Header'), { ssr: false });

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">私たちについて</h1>

            <div className="mb-8">
              <Image
                src="/team-photo.jpg" // チーム写真のパスを指定してください
                alt="DojoConnectチーム"
                width={600}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              DojoConnectは、柔術家の濱田優貴を中心とした有志のメンバーによって立ち上げられたプロジェクトです。私たちは、道場の運営管理の効率化やトレーニングの管理を一元化する総合的な管理ソフトウェアを開発しています。
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">私たちのミッション</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>武道家の技術向上をサポート</li>
              <li>道場間のネットワーキングを促進</li>
              <li>武道コミュニティの活性化</li>
              <li>デジタル技術を活用した道場運営の近代化</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">将来のビジョン</h2>
            <p className="text-lg text-gray-700 mb-6">
              中期的には、加盟道場やメンバーを中心としたコミュニティを形成し、このプロジェクトをオープンソース化することで、世界中の武道家に貢献していきたいと考えています。私たちは、技術と武道の融合が、グローバルな武道コミュニティの発展につながると信じています。
            </p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">参加のお誘い</h3>
              <p className="text-gray-700">
                DojoConnectの開発に興味がある方、武道の発展に貢献したい方は、ぜひご連絡ください。一緒に武道の未来を創造しましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
