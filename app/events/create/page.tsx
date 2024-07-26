
import React from 'react';
import Layout from '../../layout';

const CreateEventPage: React.FC = () => {
  return (
    <Layout>
      <h2>Create New Event</h2>
      <form>
        <label>
          Event Name:
          <input type="text" name="eventName" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <label>
          Time:
          <input type="time" name="time" />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </Layout>
  );
};

export default CreateEventPage;
