'use client';

import Auth0ProviderWithHistory from './auth0-config';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

import { Providers } from './providers';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
  return (

<Auth0ProviderWithHistory>
  <Providers>
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <LoginButton />
        <LogoutButton />
      </div>
      <Profile />
      <HomePage />
    </main>
    <Footer />
  </Providers>
</Auth0ProviderWithHistory>
  );
}
