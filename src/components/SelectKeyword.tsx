import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import './components.css';

export function SelectKeyword() {
  const {keywords} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset className="select-keyword">
      <legend>Keywords</legend>
      {keywords.map((kw) => (
        <button
          key={kw}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/keyword/${kw}`);
          }}
        >
          {kw}
        </button>
      ))}
    </fieldset>
  );
}
