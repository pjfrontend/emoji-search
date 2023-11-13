import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';

export function SelectVersion() {
  const {versions} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
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
