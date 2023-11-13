import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';

export function SelectGroup() {
  const {groups} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset
      style={{
        display: 'flex',
        flexFlow: 'wrap',
      }}
    >
      <legend>Groups</legend>
      {Object.keys(groups).map((g) => (
        <fieldset
          key={g}
          style={{
            display: 'flex',
            flexFlow: 'column',
          }}
        >
          <legend>{g}</legend>
          {groups[g].map((s) => (
            <button
              key={s}
              type="button"
              style={{marginBottom: '0.5rem'}}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/group/${s}`);
              }}
            >
              {s}
            </button>
          ))}
        </fieldset>
      ))}
    </fieldset>
  );
}
