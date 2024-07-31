import React from 'react';

const TechniqueCard: React.FC<{ name: string; description: string }> = ({ name, description }) => {
  return (
    <div className="technique-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TechniqueCard;
