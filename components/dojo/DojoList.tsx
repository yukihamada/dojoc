import React from 'react';

const DojoList: React.FC<{ dojos: { name: string; location: string }[] }> = ({ dojos }) => {
  return (
    <div className="dojo-list">
      {dojos.map((dojo, index) => (
        <div key={index} className="dojo-item">
          <h2>{dojo.name}</h2>
          <p>{dojo.location}</p>
        </div>
      ))}
    </div>
  );
};

export default DojoList;
