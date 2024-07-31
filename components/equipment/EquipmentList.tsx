import React from 'react';

const EquipmentList: React.FC<{
  equipment: { name: string; type: string }[];
}> = ({ equipment }) => {
  return (
    <div className="equipment-list">
      {equipment.map((item, index) => (
        <div key={index} className="equipment-item">
          <h2>{item.name}</h2>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
