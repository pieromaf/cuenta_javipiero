import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ message, type }) => {
  if (!message) return null;

  const alertClass = type === 'success' ? 'alert alert-success' : 'alert alert-danger';

  return (
    <div className={alertClass}>
      {message}
    </div>
  );
};

export default Alert;