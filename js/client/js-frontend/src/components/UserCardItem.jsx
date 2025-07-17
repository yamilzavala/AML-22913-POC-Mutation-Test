import React from 'react';
import './UserCard.css';

export const UserCardItem = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="avatar-circle">{user.name.charAt(0)}</div>
        <div>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      <div className="user-card-body">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Website:</strong> {user.website}</p>
        {user.email && (
          <p className="api-note">Queried Email: {user.email.toUpperCase()}</p>
        )}
      </div>
    </div>
  );
};
