import React from 'react';
import Layout from '../../layout';

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Register Page">
          Register
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
          <label className="block">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full"
              aria-label="Confirm Password"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
