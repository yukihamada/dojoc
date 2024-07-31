import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <button onClick={() => signIn('google')}>Googleでログイン</button>
        </>
      ) : (
        <>
          <p>こんにちは、{session.user?.name}さん</p>
          <button onClick={() => signOut()}>ログアウト</button>
        </>
      )}
    </div>
  );
};

export default Login;
