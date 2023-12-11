import {Link} from 'react-router-dom';
import React from 'react';
import './components.css';

export function IndexButton() {
  return (
    <Link to="/" className="index-btn">
      Back to Index
    </Link>
  );
}
