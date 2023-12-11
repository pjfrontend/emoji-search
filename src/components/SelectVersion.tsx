import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import './components.css';

export function SelectVersion() {
  const {versions} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset className="select-version">
      <legend>Versions</legend>
      {versions.map((v) => (
        <button
          key={v}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/version/${v.replace('.', '-')}`);
          }}
        >
          {v}
        </button>
      ))}
    </fieldset>
  );
}
