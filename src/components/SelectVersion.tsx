import React from 'react';
import {useEmojiData} from '../hooks/useEmojiData';

export function SelectVersion() {
  const {versions} = useEmojiData();
  // TODO: send values somewhere
  return (
    <form>
      <fieldset>
        <legend>Versions</legend>
        {versions.map((v) => (
          <div key={v}>
            <input type="checkbox" name="versions" value={v} id={v} />
            <label htmlFor={v} style={{fontFamily: 'sans-serif'}}>
              {v}
            </label>
          </div>
        ))}
      </fieldset>
    </form>
  );
}
