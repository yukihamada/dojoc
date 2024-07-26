
import React from 'react';
import Layout from '../../layout';

const EditProfilePage: React.FC = () => {
  return (
    <Layout>
      <h2>Edit Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </Layout>
  );
};

export default EditProfilePage;
