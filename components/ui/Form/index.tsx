import React from 'react';

const Form: React.FC<{ onSubmit: () => void }> = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
