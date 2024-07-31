
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
        <img className="w-full" src={user.picture} alt={user.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{user.name}</div>
          <p className="text-gray-700 text-base">{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
