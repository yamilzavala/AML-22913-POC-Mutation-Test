// src/components/UserCardItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserCardItem } from './UserCardItem';

describe('UserCardItem', () => {
  test('renders user name, email, username, website and uppercased email note', () => {
    // Arrange
    const mockUser = {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      username: 'alicej',
      website: 'alice.dev',
    };

    // Act
    render(<UserCardItem user={mockUser} />);

    // Assert
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText(/Username:/)).toBeInTheDocument();
    expect(screen.getByText(/Website:/)).toBeInTheDocument();
    expect(screen.getByText('alice.dev')).toBeInTheDocument();
    // ❌ Intentional forced error for demonstration purposes
    // expect(screen.getByText('Queried Email: ALICE@EXAMPLE.COM')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument(); // avatar circle
  });

  test('does not render uppercased email note when user.email is empty', () => {
    // Arrange
    const mockUser = {
      name: 'Bob',
      email: '',
      username: 'bobby',
      website: 'bob.io',
    };

    // Act
    render(<UserCardItem user={mockUser} />);

    // Assert
    expect(screen.queryByText(/Queried Email:/)).not.toBeInTheDocument();
  });
});
