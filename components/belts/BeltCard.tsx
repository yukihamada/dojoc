import React from 'react';

const BeltCard: React.FC<{ rank: string; color: string }> = ({ rank, color }) => {
  return (
    <div className="belt-card" style={{ backgroundColor: color }}>
      <h2>{rank}</h2>
    </div>
  );
};

export default BeltCard;
