import React from 'react';

const DojoCard: React.FC<{ name: string; location: string }> = ({ name, location }) => {
  return (
    <div className="dojo-card">
      <h2>{name}</h2>
      <p>{location}</p>
    </div>
  );
};

export default DojoCard;
