import React from 'react';
import Layout from '../../layout';

const ForgotPasswordPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Forgot Password Page">
          Forgot Password
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
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasswordPage;
