import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-blue-500" aria-live="polite" role="status">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
