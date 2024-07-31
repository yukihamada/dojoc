import React from 'react';

const PhilosophyArticle: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="philosophy-article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PhilosophyArticle;
