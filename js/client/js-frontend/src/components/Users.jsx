import './Users.css';
import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../api/users';
import { UserCardItem } from './UserCardItem';
import React from 'react';

export const Users = () => {
  const { data, isLoading, isError } = useQuery(
   {
     queryKey: ['users'],
     queryFn: fetchAllUsers
   }
  );

  if (isLoading) return <p className="users__status">Loading users...</p>;
  if (isError || !data) return <p className="users__status error">Failed to load users.</p>;

  return (
    <div className="users">
      <h2>All Users</h2>
      <div className="users__list">
        {data.map(user => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
