import React from 'react';
import Layout from '../layout';

const TrainingPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold" aria-label="Training Sessions Page">
          Training Sessions
        </h2>
        <p>Here you can find a list of all training sessions.</p>
      </div>
    </Layout>
  );
};

export default TrainingPage;
