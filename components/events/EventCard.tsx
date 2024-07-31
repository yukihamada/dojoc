import React from 'react';

const EventCard: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default EventCard;
