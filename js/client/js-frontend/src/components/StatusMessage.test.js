import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusMessage } from './StatusMessage';

describe('StatusMessage', () => {
  it('renders success message with correct class', () => {
    render(<StatusMessage status="success" message="Profile saved!" />);
    const msg = screen.getByRole('status');
    expect(msg).toHaveTextContent('Profile saved!');
    expect(msg).toHaveClass('status-message--success');
  });

  it('renders error message with correct class', () => {
    render(<StatusMessage status="error" message="Something went wrong." />);
    const msg = screen.getByRole('status');
    expect(msg).toHaveTextContent('Something went wrong.');
    expect(msg).toHaveClass('status-message--error');
  });

  it('renders info message with correct class', () => {
    render(<StatusMessage status="info" message="FYI: Changes are not saved automatically." />);
    const msg = screen.getByRole('status');
    expect(msg).toHaveTextContent('FYI: Changes are not saved automatically.');
    expect(msg).toHaveClass('status-message--info');
  });

  it('renders nothing if message is empty', () => {
    const { container } = render(<StatusMessage status="success" message="" />);
    expect(container.firstChild).toBeNull();
  });
});
