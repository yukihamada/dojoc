import React from 'react';

const CertificationCard: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <div className="certification-card">
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default CertificationCard;
