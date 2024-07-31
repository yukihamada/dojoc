import React from 'react';

const ProfileCard: React.FC<{ name: string; bio: string }> = ({ name, bio }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
