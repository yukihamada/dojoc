
import { signIn } from 'next-auth/react';

export default function Login() {
  const handleLogin = async () => {
    await signIn('credentials', {
      redirect: false,
      username: 'user',
      password: 'password',
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}
