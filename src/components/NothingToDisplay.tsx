import React from 'react';
import './components.css';

export function NothingToDisplay() {
  return (
    <div>
      <span className="no-display-emoji">🚧🙅⛔</span>
      <h3 className="no-display-text">Nothing to display</h3>
      <span className="no-display-emoji">🚧🙅⛔</span>
    </div>
  );
}
