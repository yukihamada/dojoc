import React from 'react';

const PaymentForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Amount:
        <input type="number" name="amount" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
