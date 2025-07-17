// src/components/Users.test.js
import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Users } from './Users';
import { fetchAllUsers } from '../api/users';
import { renderWithQueryClient } from '../test-utils';

jest.mock('../api/users');

describe('Users component', () => {
  test('shows loading initially and then renders user list', async () => {
    // Arrange
    const mockUsers = [
      { id: 1, name: 'Alice', email: 'alice@example.com', username: 'alicej', website: 'alice.dev' },
      { id: 2, name: 'Bob', email: 'bob@example.com', username: 'bobby', website: 'bob.io' },
    ];
    fetchAllUsers.mockResolvedValueOnce(mockUsers);

    // Act
    renderWithQueryClient(<Users />);

    // Assert loading first
    expect(screen.getByText('Loading users...')).toBeInTheDocument();

    // Wait for loading to go away
    await waitForElementToBeRemoved(() => screen.queryByText('Loading users...'));

    // Assert users rendered
    expect(screen.getByText('All Users')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  test('shows error message when fetch fails', async () => {
    // Arrange
    fetchAllUsers.mockRejectedValueOnce(new Error('Failed request'));

    // Act
    renderWithQueryClient(<Users />);

    // Wait for loading to disappear
    await waitForElementToBeRemoved(() => screen.queryByText('Loading users...'));

    // Assert error message
    expect(screen.getByText('Failed to load users.')).toBeInTheDocument();
  });
});
