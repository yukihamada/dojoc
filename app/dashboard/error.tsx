'use client';
import React from 'react';

const Error: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-red-500" aria-live="assertive" role="alert">
        Error occurred
      </p>
    </div>
  );
};

export default Error;
