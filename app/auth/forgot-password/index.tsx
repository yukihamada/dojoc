
import React from 'react';
import Layout from '../../layout';

const ForgotPasswordPage: React.FC = () => {
  return (
    <Layout>
      <h2>Forgot Password</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </Layout>
  );
};

export default ForgotPasswordPage;
