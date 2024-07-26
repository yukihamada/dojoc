
import React from 'react';
import Layout from '../../layout';

const CreateTrainingPage: React.FC = () => {
  return (
    <Layout>
      <h2>Create New Training Session</h2>
      <form>
        <label>
          Training Name:
          <input type="text" name="trainingName" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <button type="submit">Create Training</button>
      </form>
    </Layout>
  );
};

export default CreateTrainingPage;
