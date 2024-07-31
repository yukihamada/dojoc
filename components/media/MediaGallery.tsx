import React from 'react';

const MediaGallery: React.FC<{
  mediaItems: { id: string; url: string; title: string }[];
}> = ({ mediaItems }) => {
  return (
    <div className="media-gallery">
      {mediaItems.map((item) => (
        <div key={item.id} className="media-item">
          <img src={item.url} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
