import React from 'react';

const EventList: React.FC<{ events: { title: string; date: string }[] }> = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
