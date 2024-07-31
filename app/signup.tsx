'use client';

import { signIn } from 'next-auth/react';
import Layout from './layout';
import Head from 'next/head';

const SignUpPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>DojoConnect - サインアップ</title>
        <meta name="description" content="DojoConnect - サインアップしてください。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center mb-8">サインアップ</h1>
          <div className="text-center">
            <p className="mb-6 text-lg">
              サインアップするには、以下のボタンをクリックしてください。
            </p>
            <button
              onClick={() => signIn('auth0')}
              className="btn btn-primary m-2 px-6 py-3 text-lg"
              aria-label="サインアップ"
            >
              サインアップ
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUpPage;
