import React from 'react';
import {useEmojiData} from '../hooks/useEmojiData';

export function SelectGroup() {
  const {groups} = useEmojiData();
  // TODO: send values somewhere
  console.log(groups);
  return (
    <form>
      <fieldset>
        <legend>Groups</legend>
        {Object.keys(groups).map((g) => (
          <div key={g}>
            <input type="checkbox" name="groups" value={g} id={g} />
            <label htmlFor={g} style={{fontFamily: 'sans-serif'}}>
              {g}
            </label>
            <ul>
              {groups[g].map((s) => (
                <li key={s}>
                  <input type="checkbox" name="groups" value={s} id={s} />
                  <label htmlFor={s} style={{fontFamily: 'sans-serif'}}>
                    {s}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </fieldset>
    </form>
  );
}
