
import React from 'react';
import Layout from '../../layout';

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <h2>Register</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <button type="submit">Register</button>
      </form>
    </Layout>
  );
};

export default RegisterPage;
