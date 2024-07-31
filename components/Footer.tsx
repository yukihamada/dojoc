import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              DojoConnect
            </Link>
            <p className="mt-2 text-sm text-gray-400">道場をつなぐ、未来をひらく</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <a
              href="https://twitter.com/dojoconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/dojoconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
            <a href="mailto:info@dojoconnect.com" className="text-2xl hover:text-yellow-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DojoConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
