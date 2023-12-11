import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import './components.css';

export function SelectGroup() {
  const {groups} = useEmojiData();
  const navigate = useNavigate();
  return (
    <fieldset className="select-group">
      <legend>Groups</legend>
      {Object.keys(groups).map((g) => (
        <fieldset key={g} className="select-subgroup">
          <legend>{g}</legend>
          {groups[g].map((s) => (
            <button
              key={s}
              type="button"
              className="subgroup-btn mini-btn"
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
