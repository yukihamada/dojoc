import React from 'react';
import Layout from '../../layout';

const ResetPasswordPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Reset Password Page">
          Reset Password
        </h2>
        <form className="space-y-4">
          <label className="block">
            New Password:
            <input
              type="password"
              name="newPassword"
              className="mt-1 block w-full"
              aria-label="New Password"
              required
            />
          </label>
          <label className="block">
            Confirm New Password:
            <input
              type="password"
              name="confirmNewPassword"
              className="mt-1 block w-full"
              aria-label="Confirm New Password"
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

export default ResetPasswordPage;
