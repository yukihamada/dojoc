import React from 'react';
import Layout from '../layout';

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Profile Page">
          Profile
        </h2>
        <p>Here you can view and edit your profile.</p>
      </div>
    </Layout>
  );
};

export default ProfilePage;
