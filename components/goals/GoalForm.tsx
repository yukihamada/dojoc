import React from 'react';

const GoalForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Goal:
        <input type="text" name="goal" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GoalForm;
