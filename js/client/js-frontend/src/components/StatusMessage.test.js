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
    // ❌ Intentional forced error for demonstration purposes
    // expect(msg).toHaveClass('status-message--error'); // Intentionally removed for Stryker demo
  });

  it('renders info message with correct class', () => {
    render(<StatusMessage status="info" message="FYI: Changes are not saved automatically." />);
    const msg = screen.getByRole('status');
    expect(msg).toHaveTextContent('FYI: Changes are not saved automatically.');
    expect(msg).toHaveClass('status-message--info');
  });

  // ❌ Intentional forced error for demonstration purposes
  // it('renders warning message with correct class', () => {
  //   render(<StatusMessage status="warning" message="This is a warning message." />);
  //   const msg = screen.getByRole('status');
  //   expect(msg).toHaveTextContent('This is a warning message.');
  //   expect(msg).toHaveClass('status-message--warning');
  // });

  it('renders nothing if message is empty', () => {
    const { container } = render(<StatusMessage status="success" message="" />);
    expect(container.firstChild).toBeNull();
  });
});
