import {useNavigate} from 'react-router-dom';
import React from 'react';
import './components.css';

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="back-btn" onClick={() => navigate(-1)}>
      Back
    </button>
  );
}
