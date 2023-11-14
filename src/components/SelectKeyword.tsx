import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';

export function SelectKeyword() {
  const {keywords} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'wrap',
      }}
    >
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
