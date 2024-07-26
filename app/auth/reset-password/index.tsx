
import React from 'react';
import Layout from '../../layout';

const ResetPasswordPage: React.FC = () => {
  return (
    <Layout>
      <h2>Reset Password</h2>
      <form>
        <label>
          New Password:
          <input type="password" name="newPassword" />
        </label>
        <label>
          Confirm New Password:
          <input type="password" name="confirmNewPassword" />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </Layout>
  );
};

export default ResetPasswordPage;
