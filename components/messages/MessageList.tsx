import React from 'react';

const MessageList: React.FC<{
  messages: { id: string; content: string }[];
}> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message-item">
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
