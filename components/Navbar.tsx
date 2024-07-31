import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-white">ホーム</a>
          </Link>
        </li>
        {session && (
          <li>
            <Link href="/profile">
              <a className="text-white">プロフィール</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
