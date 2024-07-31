import React from 'react';

const ThreadList: React.FC<{ threads: { id: string; title: string }[] }> = ({ threads }) => {
  return (
    <div className="thread-list">
      {threads.map((thread) => (
        <div key={thread.id} className="thread-item">
          <h2>{thread.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
