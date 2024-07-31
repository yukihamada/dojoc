import React from 'react';

const TrainingCalendar: React.FC<{
  events: { date: string; title: string }[];
}> = ({ events }) => {
  return (
    <div className="training-calendar">
      {events.map((event, index) => (
        <div key={index} className="calendar-event">
          <p>
            {event.date}: {event.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TrainingCalendar;
