import React from 'react';
import Layout from '../../layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Login Page">
          Login
        </h2>
        <form className="space-y-4">
          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              className="mt-1 block w-full"
              aria-label="Email"
              required
            />
          </label>
          <label className="block">
            Password:
            <input
              type="password"
              name="password"
              className="mt-1 block w-full"
              aria-label="Password"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
