import React from 'react';

const NutritionForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Food Item:
        <input type="text" name="foodItem" />
      </label>
      <label>
        Calories:
        <input type="number" name="calories" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NutritionForm;
