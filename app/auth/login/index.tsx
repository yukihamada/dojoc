
import React from 'react';
import Layout from '../../layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
