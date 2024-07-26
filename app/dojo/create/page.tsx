
import React from 'react';
import Layout from '../../layout';

const CreateDojoPage: React.FC = () => {
  return (
    <Layout>
      <h2>Create New Dojo</h2>
      <form>
        <label>
          Dojo Name:
          <input type="text" name="dojoName" />
        </label>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <button type="submit">Create Dojo</button>
      </form>
    </Layout>
  );
};

export default CreateDojoPage;
