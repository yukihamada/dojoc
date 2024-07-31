import React from 'react';

const ExchangeEvent: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <div className="exchange-event">
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default ExchangeEvent;
