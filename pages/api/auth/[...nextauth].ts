import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../lib/firebase';

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // 他のプロバイダーを追加する場合はここに記述
  ],
  adapter: FirebaseAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  },
});
