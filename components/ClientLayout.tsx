'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </UserProvider>
  );
}
