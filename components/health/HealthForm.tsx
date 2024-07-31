import React from 'react';

const HealthForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Health Metric:
        <input type="text" name="metric" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HealthForm;
