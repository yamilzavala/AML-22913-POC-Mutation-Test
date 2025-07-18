import React from 'react';
import './StatusMessage.css';

const statusClassMap = {
  success: 'status-message--success',
  error: 'status-message--error',
  info: 'status-message--info',
  warning: 'status-message--warning', // Not covered by any test
};

export const StatusMessage = ({ status, message }) => {
  if (!message) return null;
  const className = statusClassMap[status] || statusClassMap.info;
  return (
    <div className={`status-message ${className}`} role="status" aria-live="polite">
      {message}
    </div>
  );
};

