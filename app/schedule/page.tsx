import React from 'react';
import Layout from '../layout';

const SchedulePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Schedule Page">
          Schedule
        </h2>
        <p>Here you can view and manage your schedule.</p>
      </div>
    </Layout>
  );
};

export default SchedulePage;
